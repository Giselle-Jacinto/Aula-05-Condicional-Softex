import "./postagem.css";

interface PostagemProps {
  nome: string;
  lugar: string;
  lugarURL: string;
  curtido: boolean;
}

export function Postagem(props: PostagemProps) {
  return (
    <div className="container-postagem">
      <div className="postagem-header">
        <div className="avatar-container">
          <img
            src={"https://www.w3schools.com/howto/img_avatar.png"}
            width="100%"
          />
        </div>

        <div className="header-info">
          <span>{props.nome}</span>
          <span>{props.lugar}</span>
        </div>
      </div>

      <div className="container-img">
        <img src={props.lugarURL} width="100%" />
      </div>

      <div className="postagem-footer">
        {props.curtido === false ? (
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        ) : (
          <i
            className="fa fa-heart"
            style={{ color: "red" }}
            aria-hidden="true"
          ></i>
        )}
      </div>
    </div>
  );
}
