import Footer from "./footer";
import Header from "./header";

function Layout(props) {
  return (
    <div>
      <div className="flex flex-col min-h-screen ">
        <Header />

        <section className="flex-auto">
          <div className="max-w-5xl mx-auto  my-8">{props.children}</div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Layout;
