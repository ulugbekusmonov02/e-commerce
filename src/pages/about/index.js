import Layout from "../../components/layout";

function AboutPage() {
  return (
    <>
      <Layout>
        <h1 className="text-slate-600 flex justify-center items-center text-4xl font-bold mb-4">
          About Star Stadium Agency
        </h1>
        <p className="text-2xl max-w-3xl mx-auto text-center   ">
          The Star Stadium Visitors Bureau is the official destination marketing
          organization for the south metropolitan region, representing 62 south
          and southwest suburbs of Chicago. Working with the Illinois Bureau of
          Tourism, the Chicago Southland CVB coordinates sales and marketing of
          the Chicago Southland as a destination for leisure visitors, meetings
          and conventions, group tours (motorcoaches), sporting events and other
          activities.
        </p>
        <img
          src="https://www.pcclean.io/wp-content/uploads/2020/4/VFBVrq.jpg"
          className="mt-6 max-w-4xl mx-auto"
        />
      </Layout>
    </>
  );
}

export default AboutPage;
