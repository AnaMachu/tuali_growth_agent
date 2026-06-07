import { useState, useEffect } from "react"

export default function App() {
  const [screen, setScreen] = useState("inicio")

  return (
    <div style={{minHeight: "100vh", fontFamily: "Nunito, sans-serif"}}>
      {screen === "inicio" && <PaginaInicio onAllie={() => setScreen("bienvenido")} />}
      {screen === "bienvenido" && <PantallaBienvenido onNext={() => setScreen("herramientas")} />}
      {screen === "herramientas" && <PantallaHerramientas onNext={() => setScreen("procesando")} />}
      {screen === "procesando" && <PantallaProcesando />}
    </div>
  )
}

function PaginaInicio({ onAllie }) {
  const NAV_TABS = ["Inicio", "Productos", "Pedidos", "Gana"]

  return (
    <div style={{minHeight: "100vh", background: "#f5f5f5"}}>
      <div style={{background: "linear-gradient(to right, #E4002B, #F16321)", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px", position: "sticky", top: 0, zIndex: 100}}>
        <div style={{display: "flex", alignItems: "center", gap: "32px"}}>
          <span style={{color: "white", fontWeight: "900", fontSize: "26px", letterSpacing: "-1px"}}>túali</span>
          <div style={{display: "flex", gap: "4px"}}>
            {NAV_TABS.map(tab => (
              <button key={tab} style={{background: "transparent", border: "1px solid transparent", borderRadius: "8px", color: "white", padding: "6px 14px", fontSize: "14px", cursor: "pointer", fontFamily: "Nunito, sans-serif"}}>
                {tab}
              </button>
            ))}
            <button
              onClick={onAllie}
              style={{background: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.6)", borderRadius: "8px", color: "white", padding: "6px 16px", fontSize: "14px", fontWeight: "700", cursor: "pointer", fontFamily: "Nunito, sans-serif", transition: "all 0.2s ease"}}
              onMouseEnter={e => e.target.style.background = "rgba(255,255,255,0.4)"}
              onMouseLeave={e => e.target.style.background = "rgba(255,255,255,0.25)"}
            >
              ✨ Allie
            </button>
          </div>
        </div>
        <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
          <div style={{background: "rgba(255,255,255,0.15)", borderRadius: "20px", padding: "6px 16px", display: "flex", alignItems: "center", gap: "8px", width: "200px"}}>
            <span style={{color: "white", fontSize: "14px"}}>🔍</span>
            <span style={{color: "rgba(255,255,255,0.7)", fontSize: "14px"}}>Buscar</span>
          </div>
          <div style={{width: "36px", height: "36px", borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", color: "#E4002B", fontSize: "12px"}}>AC</div>
        </div>
      </div>

      <div style={{background: "white", padding: "8px 40px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div>
          <span style={{fontSize: "12px", color: "#999"}}>Punto de venta: </span>
          <span style={{fontSize: "13px", fontWeight: "700"}}>Abarrotes Chabelita</span>
          <span style={{fontSize: "12px", color: "#999"}}> · Mar ártico no.201, mazatlán</span>
        </div>
        <span style={{fontSize: "12px", background: "#e8f5e9", color: "#22C55E", padding: "3px 12px", borderRadius: "10px", fontWeight: "600"}}>● Pedido Confirmado · #39E2C00A</span>
      </div>

      <div style={{maxWidth: "1200px", margin: "0 auto", padding: "28px 40px"}}>
        <div style={{display: "flex", gap: "10px", marginBottom: "24px"}}>
          <div style={{background: "#E4002B", borderRadius: "10px", padding: "10px 24px"}}>
            <span style={{color: "white", fontWeight: "900", fontSize: "18px"}}>Coca-Cola</span>
          </div>
          <div style={{background: "#f5e6c8", borderRadius: "10px", padding: "10px 24px"}}>
            <span style={{color: "#8B6914", fontWeight: "700", fontSize: "18px"}}>Bokados</span>
          </div>
        </div>

        <div style={{display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px", marginBottom: "24px"}}>
          <div
            onClick={onAllie}
            style={{background: "linear-gradient(135deg, #fff0f0, #fff5ee)", borderRadius: "20px", padding: "36px", border: "2px solid #E4002B22", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "all 0.2s ease"}}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.01)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(228,0,43,0.15)" }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none" }}
          >
            <div>
              <div style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px"}}>
                <span style={{fontSize: "30px"}}>✨</span>
                <span style={{fontWeight: "900", fontSize: "32px", background: "linear-gradient(to right, #E4002B, #F16321)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Allie</span>
              </div>
              <p style={{fontWeight: "700", fontSize: "22px", color: "#1A1A1A", marginBottom: "8px"}}>Tu asistente de crecimiento</p>
              <p style={{fontSize: "14px", color: "#666", marginBottom: "24px", maxWidth: "360px"}}>Recibe recomendaciones personalizadas basadas en tu historial de Tuali para hacer crecer tu negocio.</p>
              <button style={{background: "linear-gradient(to right, #E4002B, #F16321)", border: "none", borderRadius: "12px", padding: "14px 28px", color: "white", fontWeight: "700", cursor: "pointer", fontSize: "15px", fontFamily: "Nunito, sans-serif"}}>
                Comenzar con Allie →
              </button>
            </div>
            <div style={{fontSize: "110px", opacity: "0.85", userSelect: "none"}}>🤖</div>
          </div>

          <div style={{background: "linear-gradient(135deg, #fff8e1, #fff3cd)", borderRadius: "20px", padding: "28px", border: "1px solid #FFB80033", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <div>
              <p style={{fontSize: "22px", fontWeight: "900", color: "#E4002B", lineHeight: "1.3", marginBottom: "10px"}}>¡Ya acumulaste Puntos, ahora hazlos valer!</p>
              <p style={{fontSize: "13px", color: "#888", marginBottom: "20px"}}>Canjea por productos Coca-Cola.</p>
            </div>
            <div style={{background: "linear-gradient(to right, #E4002B, #F16321)", borderRadius: "10px", padding: "8px 18px", display: "inline-block", width: "fit-content"}}>
              <span style={{color: "white", fontWeight: "900", fontSize: "18px"}}>gana</span>
            </div>
          </div>
        </div>

        <div style={{background: "white", borderRadius: "16px", padding: "22px 28px", marginBottom: "20px"}}>
          <h3 style={{fontWeight: "700", fontSize: "16px", marginBottom: "18px", color: "#1A1A1A"}}>Categorías</h3>
          <div style={{display: "flex", gap: "20px"}}>
            {[
              {icon: "👑", label: "Tus más vendidos"},
              {icon: "🏷️", label: "Promos", active: true},
              {icon: "🥤", label: "Refrescos"},
              {icon: "💧", label: "Agua"},
              {icon: "🥛", label: "Lácteos"},
              {icon: "🧃", label: "Jugos"},
              {icon: "⚡", label: "Energéticas"},
            ].map(cat => (
              <div key={cat.label} style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", cursor: "pointer"}}>
                <div style={{width: "68px", height: "68px", borderRadius: "16px", border: cat.active ? "2px solid #E4002B" : "1px solid #eee", background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "30px"}}>
                  {cat.icon}
                </div>
                <span style={{fontSize: "11px", textAlign: "center", fontWeight: cat.active ? "700" : "400", color: cat.active ? "#E4002B" : "#555"}}>{cat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{background: "white", borderRadius: "16px", padding: "22px 28px"}}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
              <span style={{fontSize: "28px"}}>🧺</span>
              <div>
                <p style={{fontWeight: "700", fontSize: "16px"}}>Vuelve a surtir</p>
                <p style={{fontSize: "13px", color: "#999"}}>De pedidos anteriores, listos para reponer.</p>
              </div>
            </div>
            <span style={{color: "#E4002B", fontSize: "14px", fontWeight: "600", cursor: "pointer"}}>Ver todos ›</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function PantallaBienvenido({ onNext }) {
  const [phase, setPhase] = useState("bienvenido")

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("subtitle"), 2500)
    return () => clearTimeout(t1)
  }, [])

  return (
    <div style={{position: "fixed", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, overflow: "hidden", background: "white"}}>
      <style>{`
        @keyframes meshMove1 {
          0%,100% { transform: translate(0%,0%) scale(1); }
          30% { transform: translate(15%,-10%) scale(1.3); }
          60% { transform: translate(-10%,15%) scale(0.85); }
        }
        @keyframes meshMove2 {
          0%,100% { transform: translate(0%,0%) scale(1); }
          30% { transform: translate(-20%,10%) scale(0.8); }
          60% { transform: translate(15%,-15%) scale(1.2); }
        }
        @keyframes meshMove3 {
          0%,100% { transform: translate(0%,0%) scale(1); }
          30% { transform: translate(10%,20%) scale(1.1); }
          60% { transform: translate(-15%,-10%) scale(0.9); }
        }
        @keyframes meshMove4 {
          0%,100% { transform: translate(0%,0%) scale(1); }
          40% { transform: translate(-10%,-20%) scale(1.2); }
          70% { transform: translate(20%,10%) scale(0.8); }
        }
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(40px); }
          to { opacity:1; transform:translateY(0); }
        }
      `}</style>

      <div style={{position: "absolute", inset: 0, overflow: "hidden"}}>
        <div style={{position: "absolute", width: "80vw", height: "80vw", borderRadius: "50%", background: "radial-gradient(circle at center, rgba(228,0,43,0.5) 0%, rgba(241,99,33,0.3) 40%, transparent 70%)", top: "-20%", left: "-10%", animation: "meshMove1 10s ease-in-out infinite", filter: "blur(60px)"}}/>
        <div style={{position: "absolute", width: "70vw", height: "70vw", borderRadius: "50%", background: "radial-gradient(circle at center, rgba(255,184,0,0.5) 0%, rgba(241,99,33,0.25) 40%, transparent 70%)", top: "-10%", right: "-15%", animation: "meshMove2 13s ease-in-out infinite", filter: "blur(70px)"}}/>
        <div style={{position: "absolute", width: "90vw", height: "60vw", borderRadius: "50%", background: "radial-gradient(ellipse at center, rgba(241,99,33,0.4) 0%, rgba(228,0,43,0.15) 50%, transparent 70%)", bottom: "-20%", left: "10%", animation: "meshMove3 9s ease-in-out infinite", filter: "blur(80px)"}}/>
        <div style={{position: "absolute", width: "60vw", height: "80vw", borderRadius: "50%", background: "radial-gradient(circle at center, rgba(255,220,100,0.4) 0%, rgba(255,184,0,0.2) 45%, transparent 70%)", bottom: "-10%", right: "-10%", animation: "meshMove4 11s ease-in-out infinite", filter: "blur(60px)"}}/>
        <div style={{position: "absolute", inset: 0, background: "radial-gradient(ellipse at 55% 45%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 35%, transparent 65%)"}}/>
      </div>

      <div style={{position: "relative", zIndex: 1, textAlign: "center", padding: "0 40px"}}>
        {phase === "bienvenido" && (
          <h1 style={{fontSize: "100px", fontWeight: "900", color: "#1A1A1A", letterSpacing: "-3px", lineHeight: "1", animation: "fadeInUp 0.8s ease forwards"}}>
            Bienvenido
          </h1>
        )}
        {phase === "subtitle" && (
          <div style={{animation: "fadeInUp 0.8s ease forwards", textAlign: "center"}}>
            <p style={{fontSize: "36px", fontWeight: "400", color: "#1A1A1A", lineHeight: "1.4", maxWidth: "600px", marginBottom: "48px"}}>
              Empecemos con tu análisis de negocio
            </p>
            <button
              onClick={onNext}
              style={{background: "linear-gradient(to right, #E4002B, #F16321)", border: "none", borderRadius: "50px", padding: "16px 48px", fontSize: "18px", fontWeight: "700", color: "white", cursor: "pointer", fontFamily: "Nunito, sans-serif", display: "inline-flex", alignItems: "center", gap: "12px", boxShadow: "0 8px 30px rgba(228,0,43,0.3)", transition: "all 0.2s ease"}}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              Continuar <span style={{fontSize: "22px"}}>→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function PantallaHerramientas({ onNext }) {
  const btnBase = {
    width: "100%", padding: "16px", borderRadius: "14px", border: "2px solid #E4002B",
    background: "white", color: "#1A1A1A", fontWeight: "600", fontSize: "15px",
    cursor: "pointer", fontFamily: "Nunito, sans-serif", transition: "all 0.2s ease",
    textAlign: "left", display: "flex", alignItems: "center", justifyContent: "space-between"
  }

  return (
    <div style={{position: "fixed", inset: 0, background: "white", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, overflow: "hidden"}}>
      <style>{`
        @keyframes meshMove1 {
          0%,100% { transform: translate(0%,0%) scale(1); }
          30% { transform: translate(15%,-10%) scale(1.3); }
          60% { transform: translate(-10%,15%) scale(0.85); }
        }
        @keyframes meshMove2 {
          0%,100% { transform: translate(0%,0%) scale(1); }
          30% { transform: translate(-20%,10%) scale(0.8); }
          60% { transform: translate(15%,-15%) scale(1.2); }
        }
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(30px); }
          to { opacity:1; transform:translateY(0); }
        }
      `}</style>

      <div style={{position: "absolute", inset: 0, overflow: "hidden"}}>
        <div style={{position: "absolute", width: "60vw", height: "60vw", borderRadius: "50%", background: "radial-gradient(circle at center, rgba(228,0,43,0.3) 0%, rgba(241,99,33,0.15) 40%, transparent 70%)", top: "-20%", left: "-10%", animation: "meshMove1 10s ease-in-out infinite", filter: "blur(60px)"}}/>
        <div style={{position: "absolute", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle at center, rgba(255,184,0,0.3) 0%, rgba(241,99,33,0.15) 40%, transparent 70%)", bottom: "-10%", right: "-10%", animation: "meshMove2 13s ease-in-out infinite", filter: "blur(70px)"}}/>
      </div>

      <div style={{position: "relative", zIndex: 1, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px)", borderRadius: "24px", padding: "40px", maxWidth: "520px", width: "90%", animation: "fadeInUp 0.6s ease forwards", boxShadow: "0 20px 60px rgba(228,0,43,0.1)"}}>
        <div style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px"}}>
          <span style={{fontSize: "24px"}}>✨</span>
          <span style={{fontWeight: "900", fontSize: "22px", background: "linear-gradient(to right, #E4002B, #F16321)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Allie</span>
        </div>
        <p style={{fontSize: "16px", fontWeight: "700", color: "#1A1A1A", marginBottom: "6px", lineHeight: "1.4"}}>
          Para generar el análisis de tu negocio, utilizo tu información en Tuali.
        </p>
        <p style={{fontSize: "14px", color: "#666", marginBottom: "24px", lineHeight: "1.5"}}>
          ¿Te gustaría complementar el análisis con alguna de estas herramientas de ventas?
        </p>

        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
          <button
            onClick={onNext}
            style={{...btnBase, background: "linear-gradient(to right, #E4002B, #F16321)", color: "white", border: "none"}}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <span>Continuar solo con Tuali</span>
            <span style={{fontSize: "18px"}}>→</span>
          </button>

          {["Yomp!", "Terminal de pago", "Ingresar datos manualmente"].map(opt => (
            <button
              key={opt}
              style={btnBase}
              onMouseEnter={e => { e.currentTarget.style.background = "linear-gradient(to right, #E4002B, #F16321)"; e.currentTarget.style.color = "white"; e.currentTarget.style.border = "none" }}
              onMouseLeave={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#1A1A1A"; e.currentTarget.style.border = "2px solid #E4002B" }}
            >
              <span>{opt}</span>
              <span style={{fontSize: "18px", color: "#E4002B"}}>→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function PantallaProcesando() {
  return (
    <div style={{position: "fixed", inset: 0, background: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 200, overflow: "hidden"}}>
      <style>{`
        @keyframes meshDark1 {
          0%,100% { transform: translate(0%,0%) scale(1); }
          30% { transform: translate(20%,-15%) scale(1.3); }
          60% { transform: translate(-15%,20%) scale(0.85); }
        }
        @keyframes meshDark2 {
          0%,100% { transform: translate(0%,0%) scale(1); }
          30% { transform: translate(-25%,10%) scale(0.8); }
          60% { transform: translate(20%,-20%) scale(1.2); }
        }
        @keyframes meshDark3 {
          0%,100% { transform: translate(0%,0%) scale(1); }
          40% { transform: translate(10%,25%) scale(1.15); }
          70% { transform: translate(-20%,-10%) scale(0.9); }
        }
        @keyframes orbSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbPulse {
          0%,100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: scale(1); }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: scale(1.05); }
          50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; transform: scale(0.95); }
          75% { border-radius: 60% 40% 60% 30% / 70% 30% 50% 60%; transform: scale(1.08); }
        }
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(20px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes dots {
          0%,20% { content:""; }
          40% { content:"."; }
          60% { content:".."; }
          80%,100% { content:"..."; }
        }
        .dot-anim::after { content:""; animation:dots 1.5s infinite; }
      `}</style>

      {/* Fondo flowy */}
      <div style={{position: "absolute", inset: 0, overflow: "hidden"}}>
        <div style={{position: "absolute", width: "80vw", height: "80vw", borderRadius: "50%", background: "radial-gradient(circle at center, rgba(228,0,43,0.5) 0%, rgba(241,99,33,0.3) 40%, transparent 70%)", top: "-20%", left: "-10%", animation: "meshDark1 10s ease-in-out infinite", filter: "blur(70px)"}}/>
        <div style={{position: "absolute", width: "70vw", height: "70vw", borderRadius: "50%", background: "radial-gradient(circle at center, rgba(255,184,0,0.5) 0%, rgba(241,99,33,0.25) 40%, transparent 70%)", top: "-10%", right: "-15%", animation: "meshDark2 13s ease-in-out infinite", filter: "blur(80px)"}}/>
        <div style={{position: "absolute", width: "90vw", height: "60vw", borderRadius: "50%", background: "radial-gradient(ellipse at center, rgba(241,99,33,0.4) 0%, rgba(228,0,43,0.2) 50%, transparent 70%)", bottom: "-20%", left: "10%", animation: "meshDark3 9s ease-in-out infinite", filter: "blur(90px)"}}/>
        <div style={{position: "absolute", inset: 0, background: "radial-gradient(ellipse at 55% 45%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 35%, transparent 65%)"}}/>
      </div>

      {/* Círculo orgánico rotando */}
      <div style={{position: "relative", zIndex: 1, width: "220px", height: "220px", marginBottom: "40px"}}>
        {/* Glow exterior */}
        <div style={{position: "absolute", inset: "-30px", borderRadius: "50%", background: "radial-gradient(circle, rgba(241,99,33,0.4) 0%, rgba(228,0,43,0.2) 50%, transparent 70%)", filter: "blur(20px)", animation: "orbPulse 6s ease-in-out infinite"}}/>
        
        {/* Anillo giratorio exterior */}
        <div style={{position: "absolute", inset: "-8px", borderRadius: "50%", background: "conic-gradient(from 0deg, #E4002B, #F16321, #FFB800, #ffffff, #F16321, #E4002B)", animation: "orbSpin 3s linear infinite", filter: "blur(3px)"}}/>
        
        {/* Capa blanca que recorta */}
        <div style={{position: "absolute", inset: "8px", borderRadius: "50%", background: "white"}}/>

        {/* Blob interior orgánico */}
        <div style={{position: "absolute", inset: "16px", animation: "orbPulse 4s ease-in-out infinite", overflow: "hidden"}}>
          <div style={{width: "100%", height: "100%", background: "conic-gradient(from 0deg, #E4002B, #F16321, #FFB800, #fff5e0, #F16321, #E4002B)", animation: "orbSpin 4s linear infinite", filter: "blur(4px)"}}/>
        </div>

        {/* Brillo central */}
        <div style={{position: "absolute", inset: "35%", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,220,150,0.4) 60%, transparent 100%)"}}/>
      </div>

      {/* Texto */}
      <div style={{position: "relative", zIndex: 1, textAlign: "center", animation: "fadeInUp 1s ease 0.3s both"}}>
        <p style={{fontSize: "22px", fontWeight: "700", color: "#1A1A1A", letterSpacing: "0.3px"}} className="dot-anim">
          Estoy creando tu análisis de negocio
        </p>
        <p style={{fontSize: "14px", color: "#999", marginTop: "10px"}}>
          Esto tomará solo unos segundos
        </p>
      </div>
    </div>
  )
}