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
      <div className="navbar text-white shadow-sm px-4" style={{background: "linear-gradient(to right, #E4002B, #F16321)"}}>
        <div className="flex-1">
          <span className="text-2xl font-black">túali</span>
          <span className="ml-2 text-sm text-white opacity-75">Growth Agent</span>
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

const btnBase = {
  border: "2px solid #E4002B",
  borderRadius: "12px",
  padding: "12px",
  background: "white",
  color: "#1A1A1A",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s ease",
  fontSize: "14px",
  width: "100%",
}

const btnSelected = {
  ...btnBase,
  background: "linear-gradient(to right, #E4002B, #F16321)",
  color: "white",
  border: "none",
}

const btnPrimary = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  background: "linear-gradient(to right, #E4002B, #F16321)",
  color: "white",
  fontWeight: "700",
  fontSize: "16px",
  cursor: "pointer",
  transition: "all 0.2s ease",
}

const btnOutline = {
  padding: "10px 20px",
  borderRadius: "12px",
  border: "2px solid #E4002B",
  background: "white",
  color: "#E4002B",
  fontWeight: "600",
  fontSize: "14px",
  cursor: "pointer",
  transition: "all 0.2s ease",
}

function hoverOn(e) {
  e.target.style.background = "linear-gradient(to right, #E4002B, #F16321)"
  e.target.style.color = "white"
  e.target.style.transform = "scale(1.05)"
  e.target.style.border = "none"
}

function hoverOff(e, isSelected) {
  if (!isSelected) {
    e.target.style.background = "white"
    e.target.style.color = "#1A1A1A"
    e.target.style.transform = "scale(1)"
    e.target.style.border = "2px solid #E4002B"
  }
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
              style={data.businessType === type ? btnSelected : btnBase}
              onMouseEnter={e => { if (data.businessType !== type) hoverOn(e) }}
              onMouseLeave={e => hoverOff(e, data.businessType === type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <button
            disabled={!data.businessType}
            onClick={onNext}
            style={{...btnPrimary, background: data.businessType ? "linear-gradient(to right, #E4002B, #F16321)" : "#ccc"}}
          >
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  )
}

const MAIN_GOALS = [
  {
    id: "ventas",
    label: "📈 Quiero aumentar mis ventas",
    desc: "El agente te ayuda a vender más activando promos y recomendaciones.",
    subs: [
      { id: "ticket", label: "💰 Compra promedio por cliente", desc: "Logra que cada cliente que entra a tu tienda te compre más cada vez." },
      { id: "marca", label: "🏷️ Vender más de una marca o producto", desc: "El agente detecta qué productos se venden bien en tu zona y te sugiere tenerlos." },
      { id: "clientes", label: "🙋 Atraer más clientes", desc: "Usa loyalty y cupones para que más gente llegue a tu tienda." },
    ]
  },
  {
    id: "estable",
    label: "🛡️ Quiero mantenerme estable",
    desc: "El agente cuida tu stock y tus ingresos para que nada falle.",
    subs: [
      { id: "stock", label: "📦 No quedarme sin mis productos básicos", desc: "El agente te avisa antes de que se agote lo que más vendes." },
      { id: "ahorro", label: "💸 Ahorrar en mis compras", desc: "Cruza tu pedido con las promos activas para que gastes menos." },
      { id: "puntos", label: "⭐ No perder mis puntos de loyalty", desc: "El agente te avisa cuando estás cerca de ganar un premio." },
    ]
  },
  {
    id: "entender",
    label: "📊 Quiero entender mi negocio",
    desc: "El agente te explica qué está pasando con tus ventas en lenguaje simple.",
    subs: [
      { id: "impacto", label: "✅ Ver qué acciones funcionaron", desc: "El agente te muestra qué pasó después de cada acción que tomaste." },
      { id: "comparar", label: "🏪 Compararme con tiendas similares", desc: "Descubre qué venden otras tiendas como la tuya en tu zona." },
    ]
  },
]

function Step2({ data, setData, onNext, onBack }) {
  const [mainGoal, setMainGoal] = useState("")
  const [visibleSubs, setVisibleSubs] = useState([])
  const selected = MAIN_GOALS.find(g => g.id === mainGoal)
  const puedeAvanzar = mainGoal && data.goal

  const handleMainGoal = (id) => {
    setMainGoal(id)
    setData({ ...data, goal: "" })
    setVisibleSubs([])
    const goal = MAIN_GOALS.find(g => g.id === id)
    goal.subs.forEach((_, i) => {
      setTimeout(() => {
        setVisibleSubs(prev => [...prev, i])
      }, i * 120)
    })
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title text-xl">¿Qué quieres lograr?</h2>
        <p className="text-sm text-base-content/60">Elige tu objetivo principal.</p>

        <div className="flex flex-col gap-3 mt-2">
          {MAIN_GOALS.map((g) => (
            <div key={g.id}>
              <div
                onClick={() => handleMainGoal(g.id)}
                style={{
                  border: mainGoal === g.id ? "none" : "2px solid #E4002B",
                  borderRadius: "12px",
                  padding: "14px",
                  background: mainGoal === g.id ? "linear-gradient(to right, #E4002B, #F16321)" : "white",
                  color: mainGoal === g.id ? "white" : "#1A1A1A",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <p style={{fontWeight: "700", fontSize: "15px"}}>{g.label}</p>
                <p style={{fontSize: "12px", opacity: "0.8", marginTop: "4px"}}>{g.desc}</p>
              </div>

              {mainGoal === g.id && (
                <div style={{marginLeft: "24px", marginTop: "8px", borderLeft: "2px solid #E4002B", paddingLeft: "12px", display: "flex", flexDirection: "column", gap: "8px"}}>
                  {selected.subs.map((sub, i) => (
                    <div
                      key={sub.id}
                      onClick={() => setData({ ...data, goal: sub.id })}
                      style={{
                        border: data.goal === sub.id ? "2px solid #E4002B" : "1px solid #E4002B55",
                        borderRadius: "10px",
                        padding: "10px 12px",
                        background: data.goal === sub.id ? "linear-gradient(135deg, #fff0f0, #fff5ee)" : "white",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        opacity: visibleSubs.includes(i) ? 1 : 0,
                        transform: visibleSubs.includes(i) ? "translateY(0)" : "translateY(-8px)",
                        fontSize: "13px",
                      }}
                    >
                      <p style={{fontWeight: "600"}}>{sub.label}</p>
                      <p style={{fontSize: "11px", color: "#888", marginTop: "2px"}}>{sub.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-4">
          <button style={btnOutline} onClick={onBack}>← Atrás</button>
          <button
            disabled={!puedeAvanzar}
            onClick={onNext}
            style={{
              ...btnPrimary,
              width: "auto",
              padding: "10px 24px",
              background: puedeAvanzar ? "linear-gradient(to right, #E4002B, #F16321)" : "#ccc",
              cursor: puedeAvanzar ? "pointer" : "not-allowed"
            }}
          >
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  )
}


function Step3({ data, setData, onNext, onBack }) {
  const options = [
    { id: "voz", label: "🎙️ Por voz", desc: "El agente te manda audios con la recomendación del día" },
    { id: "chat", label: "💬 Por chat", desc: "El agente te manda mensajes y tú respondes cuando puedas" }
  ]
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title text-xl">¿Cómo prefieres que te hable el agente?</h2>
        <div className="grid grid-cols-2 gap-3 mt-3">
          {options.map((opt) => (
            <div
              key={opt.id}
              onClick={() => setData({ ...data, interface: opt.id })}
              style={{
                border: data.interface === opt.id ? "none" : "2px solid #E4002B",
                borderRadius: "12px",
                padding: "16px",
                background: data.interface === opt.id ? "linear-gradient(to right, #E4002B, #F16321)" : "white",
                color: data.interface === opt.id ? "white" : "#1A1A1A",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <p style={{fontWeight: "700", marginBottom: "6px"}}>{opt.label}</p>
              <p style={{fontSize: "12px", opacity: "0.8"}}>{opt.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button style={btnOutline} onClick={onBack}>← Atrás</button>
          <button onClick={onNext} style={{...btnPrimary, width: "auto", padding: "10px 24px"}}>
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  )
}

function Step4({ data, setData, onNext, onBack }) {
  const options = [
    { id: "yomp", label: "📱 Uso YOMP", desc: "Conectamos con tu punto de venta para ver ingresos reales", tag: "Datos exactos" },
    { id: "tuali", label: "📦 Solo uso Tuali", desc: "Usamos tu historial de pedidos como indicador de ventas", tag: "Datos inferidos" },
    { id: "manual", label: "💰 Otro sistema", desc: "Tú nos dices cada semana cuánto vendiste", tag: "Manual" },
  ]
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title text-xl">¿Cómo medimos tu avance?</h2>
        <div className="flex flex-col gap-3 mt-2">
          {options.map((opt) => (
            <div
              key={opt.id}
              onClick={() => setData({ ...data, dataSource: opt.id })}
              style={{
                border: data.dataSource === opt.id ? "none" : "2px solid #E4002B",
                borderRadius: "12px",
                padding: "14px",
                background: data.dataSource === opt.id ? "linear-gradient(to right, #E4002B, #F16321)" : "white",
                color: data.dataSource === opt.id ? "white" : "#1A1A1A",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px"}}>
                <p style={{fontWeight: "700"}}>{opt.label}</p>
                <span style={{
                  fontSize: "11px", padding: "2px 8px", borderRadius: "20px",
                  background: data.dataSource === opt.id ? "rgba(255,255,255,0.3)" : "#fff5f5",
                  color: data.dataSource === opt.id ? "white" : "#E4002B",
                  border: data.dataSource === opt.id ? "1px solid rgba(255,255,255,0.5)" : "1px solid #E4002B"
                }}>{opt.tag}</span>
              </div>
              <p style={{fontSize: "12px", opacity: "0.8"}}>{opt.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button style={btnOutline} onClick={onBack}>← Atrás</button>
          <button onClick={onNext} style={{...btnPrimary, width: "auto", padding: "10px 24px"}}>
            Comenzar →
          </button>
        </div>
      </div>
    </div>
  )
}

function Dashboard({ data }) {
  return (
    <div className="flex flex-col gap-4">
      <div style={{background: "linear-gradient(to right, #E4002B, #F16321)", borderRadius: "12px", padding: "16px", color: "white"}}>
        <p style={{fontWeight: "700"}}>¡Listo! Tu agente está configurado para <strong>{data.businessType}</strong></p>
      </div>
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <span style={{fontSize: "11px", padding: "4px 10px", borderRadius: "20px", border: "1px solid #E4002B", color: "#E4002B", display: "inline-block", marginBottom: "8px", width: "fit-content"}}>
            Recomendación del día
          </span>
          <h2 className="card-title">Activa la promo de Sprite esta semana</h2>
          <p className="text-sm text-base-content/60">Basándonos en tu historial, Sprite tiene alta rotación en tu zona. Activar la promoción puede aumentar tu ticket promedio un 12%.</p>
          <span style={{fontSize: "12px", padding: "4px 10px", borderRadius: "20px", background: "#f0fff4", color: "#22C55E", border: "1px solid #22C55E", display: "inline-block", marginTop: "8px", width: "fit-content"}}>
            Impacto estimado: +12% ventas
          </span>
          <div className="flex justify-end gap-2 mt-4">
            <button style={btnOutline}>Otra opción</button>
            <button style={{...btnPrimary, width: "auto", padding: "10px 20px"}}>Lo hago ✓</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow">
        <div className="card-body p-4">
          <p className="text-sm font-semibold">Tu meta: {data.goal} {data.pct}% en {data.weeks} semanas</p>
          <div style={{background: "#f5f5f5", borderRadius: "999px", height: "8px", marginTop: "8px", overflow: "hidden"}}>
            <div style={{background: "linear-gradient(to right, #E4002B, #F16321)", width: "15%", height: "100%", borderRadius: "999px"}}/>
          </div>
          <p className="text-xs text-base-content/60 mt-1">Progreso estimado esta semana: 15%</p>
        </div>
      </div>
    </div>
  )
}
