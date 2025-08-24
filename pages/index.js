export default function Home() {
  return (
    // fazendo um background com gradiente de roxo escuro até um dourado em diagonal crescente
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Calibri",
        fontSize: "42px",
        margin: "0",
        padding: "0",
        background: "linear-gradient(to bottom, #8e00a3, #ff6b00)",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        Bem Vindo ao Reveillon 2026 da Vocação de Jesus
      </h1>
      <ul style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <li>
          <span>
            <img
              width="40"
              height="40"
              style={{ marginRight: "10px" }}
              src="https://img.icons8.com/ios-glyphs/40/youtube-play.png"
              alt="youtube-play"
            />
            <a target="_blank" style={{textDecoration: "none"}} href="https://www.youtube.com/shorts/Ux9MlRaomTY">
              Tutorial - Como fazer seu pedido
            </a>
          </span>
        </li>
        <li>
          <a target="_blank" style={{textDecoration: "none"}} href="/cardapio">Veja o Cardápio Online</a>
        </li>
        <li>
          <a target="_blank" style={{textDecoration: "none"}} href="https://tinyurl.com/udn9mkza">
            Acesse o Auto Atendimento Online
          </a>
        </li>
      </ul>
    </div>
  );
}
