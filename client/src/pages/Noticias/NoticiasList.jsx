import { useContext, useEffect } from "react";
import { useNoticias } from "../../context/useNoticias";

function NoticasList() {
  const { getNoticias, noticias } = useNoticias();
  useEffect(() => {
    getNoticias();
  }, []);
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div>
      {noticias.map((noticia) => (
        <div
          key={noticia.id}
          style={{
            backgroundColor: "#333333",
            color: "white",
            margin: "20px auto", // Centra el div horizontalmente
            padding: "25px",
            maxWidth: "600px", // Ajusta el tamaño máximo del div
            borderRadius: "10px", // Opcional: redondea las esquinas del div
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            {/* Div de la imagen (izquierda) */}
            <div
              style={{
                flex: "0 0 80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/user.png"
                alt="User"
                style={{
                  marginTop: "15px",
                  width: "60px", // Ajusta el tamaño de la imagen
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
            </div>

            {/* Div del contenido principal (derecha) */}
            <div style={{ flex: "1" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p style={{ color: "#00CC00" }}>{noticia.usuario}</p>

                <p style={{ color: "#00CC00" }}>{formatDate(noticia.fecha_reporte)}</p>
              </div>

              {/* Div del titulo (abajo) */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p style={{ color: "#00CC00" }}>Título: </p>
                <p style={{ flex: "1", textAlign: "left" }}>
                  {" "}
                  {noticia.titulo}
                </p>
              </div>
            </div>
          </div>

          {/* div para la descripción  */}
          <div
            style={{
              paddingTop: "10px",
            }}
          >
            <p>{noticia.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoticasList;
/*

----------------------------------------------------
{foros.map((foro) => (
        <ForosCard key={foro.id} foro={foro} />
      ))}

      <button>
        <Link to="/FormularioForo">Crear Foro</Link>
      </button> */
