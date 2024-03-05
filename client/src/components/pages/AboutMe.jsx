export default function AboutMe(){
  return (
    <div>
      <h3>About me</h3>
      <p style={styles.max}>
With a decade of experience crafting fully featured applications in various languages and specializing in the MERN stack, I am passionate about creating seamless user experiences. My diverse skill set extends beyond code to include pixel art and music composition, allowing me to infuse creativity into every project. When not immersed in development, you can find me on the golf course or spending quality time with my Shih-Tzu.
      </p>
    </div>
  );
}
const styles = {
  max:{
    maxWidth:'600px',
  },
}