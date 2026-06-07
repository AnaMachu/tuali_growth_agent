import { useState } from "react"

export default function App() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState({
    businessType: "",
    goal: "",
    pct: 20,
    weeks: 4,
    interface: "chat",
    dataSource: "tuali",
  })

  return (
    <div className="min-h-screen bg-base-200">
      <div className="navbar bg-primary text-primary-content shadow-sm px-4">
        <div className="flex-1">
          <span className="text-2xl font-black">túali</span>
          <span className="ml-2 text-sm opacity-75">Growth Agent</span>
        </div>
      </div>

      <div className="max-w-lg mx-auto p-4 pt-8">
        {step === 0 && <Step1 data={data} setData={setData} onNext={() => setStep(1)} />}
        {step === 1 && <Step2 data={data} setData={setData} onNext={() => setStep(2)} onBack={() => setStep(0)} />}
        {step === 2 && <Step3 data={data} setData={setData} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
        {step === 3 && <Step4 data={data} setData={setData} onNext={() => setStep(4)} onBack={() => setStep(2)} />}
        {step === 4 && <Dashboard data={data} />}
      </div>
    </div>
  )
}

const BUSINESS_TYPES = [
  "Miscelánea / Abarrotes", "Frutería", "Papelería",
  "Carnicería / Pollería", "Panadería", "Tortillería",
  "Venta de Alcohol", "Venta de Comida", "Otros"
]

function Step1({ data, setData, onNext }) {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title text-xl">¿Cuál es el giro de tu negocio?</h2>
        <p className="text-sm text-base-content/60">El agente personaliza sus recomendaciones según tu tipo de tienda.</p>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {BUSINESS_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setData({ ...data, businessType: type })}
              className={`btn btn-sm btn-outline ${data.businessType === type ? "btn-primary" : ""}`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary w-full" disabled={!data.businessType} onClick={onNext}>
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  )
}

const GOALS = ["Aumentar ventas", "Aumentar ticket promedio", "Mantenerme estable", "No quedarme sin stock", "Aprovechar temporada"]

function Step2({ data, setData, onNext, onBack }) {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title text-xl">¿Cuál es tu meta?</h2>
        <p className="text-sm text-base-content/60">Dinos qué quieres lograr y en cuánto tiempo.</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {GOALS.map((g) => (
            <button
              key={g}
              onClick={() => setData({ ...data, goal: g })}
              className={`btn btn-sm btn-outline ${data.goal === g ? "btn-primary" : ""}`}
            >
              {g}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div>
            <label className="text-xs text-base-content/60">¿Cuánto quieres crecer? (%)</label>
            <input type="number" className="input input-bordered w-full mt-1"
              value={data.pct} onChange={(e) => setData({ ...data, pct: e.target.value })} />
          </div>
          <div>
            <label className="text-xs text-base-content/60">¿En cuántas semanas?</label>
            <input type="number" className="input input-bordered w-full mt-1"
              value={data.weeks} onChange={(e) => setData({ ...data, weeks: e.target.value })} />
          </div>
        </div>
        {data.goal && (
          <div className="alert mt-3 bg-primary/10 border-primary/20 text-sm">
            Tu meta: <strong>{data.goal} un {data.pct}%</strong> en <strong>{data.weeks} semanas</strong>
          </div>
        )}
        <div className="card-actions justify-between mt-4">
          <button className="btn btn-outline" onClick={onBack}>← Atrás</button>
          <button className="btn btn-primary" disabled={!data.goal} onClick={onNext}>Siguiente →</button>
        </div>
      </div>
    </div>
  )
}

function Step3({ data, setData, onNext, onBack }) {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title text-xl">¿Cómo prefieres que te hable el agente?</h2>
        <div className="grid grid-cols-2 gap-3 mt-3">
          {[
            { id: "voz", label: "Por voz", desc: "El agente te manda audios con la recomendación del día" },
            { id: "chat", label: "Por chat", desc: "El agente te manda mensajes y tú respondes cuando puedas" }
          ].map((opt) => (
            <div
              key={opt.id}
              onClick={() => setData({ ...data, interface: opt.id })}
              className={`card border-2 cursor-pointer ${data.interface === opt.id ? "border-primary bg-primary/5" : "border-base-300"}`}
            >
              <div className="card-body p-4">
                <p className="font-bold">{opt.label}</p>
                <p className="text-xs text-base-content/60">{opt.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="card-actions justify-between mt-4">
          <button className="btn btn-outline" onClick={onBack}>← Atrás</button>
          <button className="btn btn-primary" onClick={onNext}>Siguiente →</button>
        </div>
      </div>
    </div>
  )
}

function Step4({ data, setData, onNext, onBack }) {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title text-xl">¿Cómo medimos tu avance?</h2>
        <div className="flex flex-col gap-3 mt-2">
          {[
            { id: "yomp", label: "Uso YOMP", desc: "Conectamos con tu punto de venta para ver ingresos reales", tag: "Datos exactos" },
            { id: "tuali", label: "Solo uso Tuali", desc: "Usamos tu historial de pedidos como indicador de ventas", tag: "Datos inferidos" },
            { id: "manual", label: "Otro sistema", desc: "Tú nos dices cada semana cuánto vendiste", tag: "Manual" },
          ].map((opt) => (
            <div
              key={opt.id}
              onClick={() => setData({ ...data, dataSource: opt.id })}
              className={`card border-2 cursor-pointer ${data.dataSource === opt.id ? "border-primary bg-primary/5" : "border-base-300"}`}
            >
              <div className="card-body p-3">
                <div className="flex justify-between items-center">
                  <p className="font-bold">{opt.label}</p>
                  <span className="badge badge-outline badge-sm">{opt.tag}</span>
                </div>
                <p className="text-xs text-base-content/60">{opt.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="card-actions justify-between mt-4">
          <button className="btn btn-outline" onClick={onBack}>← Atrás</button>
          <button className="btn btn-primary" onClick={onNext}>Comenzar →</button>
        </div>
      </div>
    </div>
  )
}

function Dashboard({ data }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="alert bg-primary text-primary-content">
        <span>¡Listo! Tu agente está configurado para <strong>{data.businessType}</strong></span>
      </div>
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <div className="badge badge-primary badge-outline mb-1">Recomendación del día</div>
          <h2 className="card-title">Activa la promo de Sprite esta semana</h2>
          <p className="text-sm text-base-content/60">Basándonos en tu historial, Sprite tiene alta rotación en tu zona. Activar la promoción de etiqueta verde puede aumentar tu ticket promedio un 12%.</p>
          <div className="badge badge-success mt-1">Impacto estimado: +12% ventas</div>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-outline btn-sm">Otra opción</button>
            <button className="btn btn-primary btn-sm">Lo hago ✓</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow">
        <div className="card-body p-4">
          <p className="text-sm font-semibold">Tu meta: {data.goal} {data.pct}% en {data.weeks} semanas</p>
          <progress className="progress progress-primary w-full mt-2" value="15" max="100" />
          <p className="text-xs text-base-content/60 mt-1">Progreso estimado esta semana: 15%</p>
        </div>
      </div>
    </div>
  )
}

