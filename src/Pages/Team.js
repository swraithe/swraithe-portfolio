import React from "react";
import Card from "../Components/Card";

import { teamDetails } from "../Details";

function Team() {
  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Xirates, Dream Team
        </h1>
        <div className="container">
          <div className="card-cover">
            <div className="col-md-12">
              <div className="row">
                {React.Children.toArray(
                  teamDetails.map(
                    (member) => (
                      <div className="col-md-4 mb-2">
                        <Card title={member.name} img={member.image} text={member.description} />
                      </div>
                    )
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Team;
