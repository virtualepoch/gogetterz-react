export function Image(props) {
    return <img src={props.info.src} className={props.info.className} alt={props.info.alt} />;
  }