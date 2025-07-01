export default function page() {
  return (
    <>
      <div className="container my-20">
        <div className="page_main_box">
          <h1 className="page_main_h1">Resume</h1>
          <span className="page_main_hr"></span>
          <p className="page_main_p">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
          <div className="flex flex-wrap flex-col lg:flex-row gap-8  ">
            <div className="flex-1">
              <div>
                <h1 className="page_sub_h1 mb-4">Sumary</h1>
                <div className="relative pl-8  ">
                  <div className=" w-[1px] h-full bg-action block left-1 top-2 absolute"></div>
                  <div className="absolute -left-2 top-2 w-6 h-6 bg-white border-2 border-action rounded-full"></div>
                  <h3 className="page_sub_h1 text-secondary">
                    Brandon Johnson
                  </h3>
                  <p className="page_main_p italic">
                    Innovative and deadline-driven Graphic Designer with 3+
                    years of experience designing and developing user-centered
                    digital/print marketing material from initial concept to
                    final, polished deliverable.
                  </p>
                  <ul className="page_main_p list-disc my-4 flex gap-2 flex-col pl-4">
                    <li>Portland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                  </ul>
                </div>
              </div>
              <div>
                <h1 className="page_sub_h1 my-4">Education</h1>
                <div className="relative pl-8  ">
                  <div className=" w-[1px] h-full bg-action block left-1 top-2 absolute"></div>
                  <div className="absolute -left-2 top-2 w-6 h-6 bg-white border-2 border-action rounded-full"></div>
                  <h3 className="page_sub_h1 text-secondary">
                    Master of Fine Arts & Graphic Design
                  </h3>
                  <p className="text-primary text-sm italic my-2">
                    2015 - 2016
                  </p>
                  <p className="page_main_p italic mb-2">
                    Rochester Institute of Technology, Rochester, NY
                  </p>
                  <p className="page_main_p  ">
                    Qui deserunt veniam. Et sed aliquam labore tempore sed
                    quisquam iusto autem sit. Ea vero voluptatum qui ut
                    dignissimos deleniti nerada porti sand markend
                  </p>
                </div>
                <div className="relative pl-8  ">
                  <div className=" w-[1px] h-full bg-action block left-1 top-2 absolute"></div>
                  <div className="absolute -left-2 top-2 w-6 h-6 bg-white border-2 border-action rounded-full"></div>
                  <h3 className="page_sub_h1 text-secondary">
                    Bachelor of Fine Arts & Graphic Design
                  </h3>
                  <p className="text-primary text-sm italic my-2">
                    2015 - 2016
                  </p>
                  <p className="page_main_p italic  mb-2">
                    Rochester Institute of Technology, Rochester, NY
                  </p>
                  <p className="page_main_p  ">
                    Quia nobis sequi est occaecati aut. Repudiandae et iusto
                    quae reiciendis et quis Eius vel ratione eius unde vitae
                    rerum voluptates asperiores voluptatem Earum molestiae
                    consequatur neque etlon sader mart dila
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div>
                <h1 className="page_sub_h1 my-4">Professional Experience</h1>
                <div className="relative pl-8  ">
                  <div className=" w-[1px] h-full bg-action block left-1 top-2 absolute"></div>
                  <div className="absolute -left-2 top-2 w-6 h-6 bg-white border-2 border-action rounded-full"></div>
                  <h3 className="page_sub_h1 text-secondary">
                    Senior graphic design specialist
                  </h3>
                  <p className="text-primary text-sm italic my-2">
                    2019 - Present
                  </p>
                  <p className="page_main_p italic mb-2">
                    Experion, New York, NY
                  </p>
                  <ul className="page_main_p list-disc   flex gap-2 flex-col pl-4">
                    <li>
                      Lead in the design, development, and implementation of the
                      graphic, layout, and production communication materials
                    </li>
                    <li>
                      Delegate tasks to the 7 members of the design team and
                      provide counsel on all aspects of the project.
                    </li>
                    <li>
                      Supervise the assessment of all graphic materials in order
                      to ensure quality and accuracy of the design
                    </li>
                    <li>
                      Oversee the efficient use of production project budgets
                      ranging from $2,000 - $25,000
                    </li>
                  </ul>
                </div>
                <div className="relative pl-8  ">
                  <div className=" w-[1px] h-full bg-action block left-1 top-2 absolute"></div>
                  <div className="absolute -left-2 top-2 w-6 h-6 bg-white border-2 border-action rounded-full"></div>
                  <h3 className="page_sub_h1 text-secondary">
                    Graphic design specialist
                  </h3>
                  <p className="text-primary text-sm italic my-2">
                    2017 - 2018
                  </p>
                  <p className="page_main_p italic  mb-2">
                    Stepping Stone Advertising, New York, NY
                  </p>
                  <ul className="page_main_p list-disc   flex gap-2 flex-col pl-4">
                    <li>
                      Developed numerous marketing programs (logos,
                      brochures,infographics, presentations, and
                      advertisements).
                    </li>
                    <li>
                      Managed up to 5 projects or tasks at a given time while
                      under pressure
                    </li>
                    <li>
                      Recommended and consulted with clients on the most
                      appropriate graphic design
                    </li>
                    <li>
                      Created 4+ design presentations and proposals a month for
                      clients and account managers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
