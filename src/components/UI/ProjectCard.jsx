import './css/ProjectCardStyle.css';
export default function ProjectCard({image}){
  return (
    <div className="container image-container" style={styles.div}>
      <div className="overlay" style={styles.img}>
        <h4>Title</h4>
        <a className='icon-link'>github</a>
      </div>
      <img src={image} style={styles.img}></img>
    </div>
  );
}
const styles = {
  div:{
    width: '400px',
    height: '250px',
  },
  img: {
    width: '100%',
    height: '100%',
  }
}