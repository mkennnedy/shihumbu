import React, { useState, useEffect } from "react";

const CounterSection = () => {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [supportHours, setSupportHours] = useState(0);
  const [hardWorkers, setHardWorkers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the state to animate the counters
      setClients((prevClients) => prevClients + 1);
      setProjects((prevProjects) => prevProjects + 1);
      setSupportHours((prevHours) => prevHours + 1);
      setHardWorkers((prevWorkers) => prevWorkers + 1);
    }, 100); // Adjust the interval as needed

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="counts"
      className="counts"
      style={{
        background: 'url("../img/counts-bg.jpg") center center no-repeat',
        backgroundSize: "cover",
        padding: "80px 0 60px 0",
        position: "relative",
      }}
    >
      <div className="container">
        <div className="text-center title">
          <h3>What we have achieved so far</h3>
          <p>
            Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum
            consequatur illo.
          </p>
        </div>

        <div className="row counters position-relative">
          <div className="col-lg-3 col-6 text-center">
            <span className="counter">{clients}</span>
            <p>Students</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span className="counter">{projects}</span>
            <p>TSC Teachers</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span className="counter">{supportHours}</span>
            <p>BOM Teachers</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span className="counter">{hardWorkers}</span>
            <p>Staff</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
