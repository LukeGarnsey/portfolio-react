
export default function ProjectCard({image}){
  return (
    <div className="container">
      <img src={image} style={styles.img}></img>
    </div>
  );
}
const styles = {
  img: {
    maxWidth: '100%',
  }
}