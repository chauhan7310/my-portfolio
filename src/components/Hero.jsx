function Hero() {
  return (
    <section className="hero" style={{paddingTop:"120px"}}>

      <div className="left">
        <h3>Hello, I'm</h3>

        <h1>Aryan Chauhan</h1>

        <h2>Full Stack Web Developer</h2>

        <p>
          B.Tech 4th Year Student passionate about building modern,
          responsive and user-friendly web applications using React,
          Node.js, Express.js and MongoDB.
        </p>
        <a href="resume2.pdf" download>
        <button>Download Resume</button>
          </a>
      </div>

      <div className="right">
        <img src="/profile.jpg" alt="Aryan Chauhan" />
      </div>

    </section>
  );
}

export default Hero;