export default function ApplicationUISection({ applicationUIDatas }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 lg:px-24">
      <h2 className="text-2xl text-gray-900 font-extrabold mb-2">
        Application UI
      </h2>
      <p className="text-sm text-gray-500 border-b-2 pb-8">
        Form layouts, tables, modal dialogs — everything you need to build
        beautiful responsive web applications.
      </p>
      {applicationUIDatas.map((applicationUIData, i) => (
        <div
          key={i}
          className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:justify-between py-8 border-b-2 last:border-b-0"
        >
          <h3 className="flex-1 text-gray-900 font-semibold">
            {applicationUIData.title}
          </h3>
          <div className="grid sm:grid-cols-3 flex-[3] gap-6 ">
            {applicationUIData.sections.map((section, i) => (
              <div className="border border-gra rounded-lg flex flex-col cursor-pointer">
                <div
                  key={i}
                  className="text-center bg-gray-100 h-32 rounded-t-lg"
                >
                  <img
                    src="/img/Home/Marketing/Page/HeroBackground/HeroBG.png"
                    alt="hyaroo"
                    width="100%"
                    height="100%"
                    className="rounded-md"
                    priority="true"
                  />
                </div>
                <div className="px-4 py-4 bg-white rounded-b-lg">
                  <p className="mb-1 text-gray-900 text-sm font-semibold">
                    {section.title}
                  </p>
                  <p className="text-gray-500 text-xs font-medium">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
