// import Blog from "./BlogPage/Blog";
// import BookADemo from "./BookADemoPage/BookADemo";

function NavBar() {
  return (
    <>
      <div className="Nav-bar">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" alt="logo" className="webLogo" />
        </a>
        <button className="Resources-btn">Resources</button>
        <button className="DemoBtn">Book a Demo</button>
        {/* <Blog /> */}
        {/* <BookADemo /> */}
      </div>
    </>
  );
}

export default NavBar;
