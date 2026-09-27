export const personalInfo = {
  name: "Aditya Pradeep Kogri",
  title: "MS Electrical Engineering",
  university: "Arizona State University",
  graduationYear: "2026",
  location: "Tempe, AZ",
  email: "adityapkogri336@gmail.com",
  linkedin: "https://linkedin.com/in/aditya-p-kogri",
  github: "",
  resumeUrl: "/resume.pdf",
  availability: "Available for Full-Time December",
  bio: "Graduate Electrical Engineering student at Arizona State University with hands-on experience across the full ASIC design flow - RTL design, logic synthesis, physical design, and design verification - spanning 7nm FinFET and 32nm process technologies.",
  tagline: "// RTL to GDSII, one signoff at a time",
};

export const skills = {
  hardware: ["RTL Design", "Logic Synthesis", "Functional Verification", "Testbench Development", "Timing Analysis", "Physical Design (Floorplan, Placement, CTS, Routing)", "DRC / LVS Signoff"],
  software: ["SystemVerilog", "Verilog", "Python", "TCL", "C++", "MATLAB", "SQL"],
  tools: ["Synopsys Design Compiler", "Cadence Innovus", "Cadence Virtuoso", "HSPICE", "LTspice", "QuestaSim / ModelSim", "Linux / Windows"],
  domains: ["ASIC / VLSI Design", "7nm FinFET Process", "32nm Process Technology", "RTL-to-GDSII Flow", "Digital Design & Verification"],
};

export const projects = [
  {
    id: 1,
    title: "ASIC Acceleration for GCN - RTL to GDSII (7nm PDK)",
    description: "Closed the full ASIC design flow for a Graph Convolution Neural Network accelerator, from functional verification through synthesis to physical design signoff on a 7nm PDK.",
    tags: ["SystemVerilog", "ModelSim", "Synopsys Design Compiler", "Cadence Innovus", "DRC/LVS"],
    category: "ASIC / VLSI Design",
    github: null,
    demo: null,
    image: null,
    highlights: [
      "Verified convolution and pooling modules across multiple edge-case scenarios in ModelSim",
      "Ran logic synthesis in Synopsys Design Compiler under timing, area, and power constraints",
      "Achieved clean DRC/LVS signoff after full Cadence Innovus physical design flow",
    ],
    workflow: [
      { step: "RTL Design", description: "Developed SystemVerilog RTL for the GCN accelerator's convolution and pooling modules." },
      { step: "Functional Verification", description: "Built testbenches and validated correctness across multiple edge-case scenarios in ModelSim before synthesis." },
      { step: "Logic Synthesis", description: "Synthesized the design in Synopsys Design Compiler under timing, area, and power constraints, evaluating trade-offs across iterations." },
      { step: "Floorplanning & Placement", description: "Floorplanned and placed the synthesized netlist in Cadence Innovus targeting the 7nm PDK." },
      { step: "Clock Tree Synthesis & Routing", description: "Built the clock tree and completed routing in Cadence Innovus." },
      { step: "GDSII Signoff", description: "Closed the design with clean DRC/LVS signoff, completing the full RTL-to-GDSII flow." },
    ],
    problem: "Graph convolution network workloads are compute- and memory-intensive, so the goal was to design a dedicated ASIC datapath for GCN acceleration and carry it through a real signoff flow rather than stopping at RTL.",
    approach: "Built the convolution and pooling datapath in SystemVerilog and validated it thoroughly in simulation before committing to hardware. Once functionally verified, the design moved into Synopsys Design Compiler for logic synthesis, iterating on timing, area, and power constraints to find an acceptable trade-off. The resulting gate-level netlist was carried into Cadence Innovus for the full physical design flow - floorplanning, placement, clock tree synthesis, and routing - on a 7nm PDK, closing with DRC/LVS signoff.",
    toolsUsed: [
      { name: "ModelSim", purpose: "Functional verification of convolution and pooling modules" },
      { name: "Synopsys Design Compiler", purpose: "Logic synthesis under timing, area, and power constraints" },
      { name: "Cadence Innovus", purpose: "Floorplanning, placement, CTS, and routing" },
      { name: "SystemVerilog", purpose: "RTL implementation of the accelerator datapath" },
    ],
    results: [
      "Closed the full RTL-to-GDSII flow on a 7nm PDK, from functional simulation through physical signoff",
      "Passed clean DRC/LVS after the Cadence Innovus physical design flow",
      "Validated design trade-offs across multiple synthesis iterations to meet timing, area, and power targets",
    ],
    challenges: [
      { challenge: "Balancing timing, area, and power constraints during synthesis for a compute-heavy convolution datapath", solution: "Iterated on synthesis constraints in Design Compiler across multiple passes, comparing trade-offs each time to converge on an acceptable balance." },
      { challenge: "Catching functional edge cases before committing the design to synthesis and physical design", solution: "Built targeted testbenches in ModelSim that exercised multiple edge-case scenarios for the convolution and pooling modules ahead of synthesis." },
    ],
    learnings: [
      "How constraint choices made during logic synthesis ripple through and directly shape what's achievable during physical design",
      "The value of exhaustive functional verification before synthesis, since bugs caught pre-synthesis are far cheaper to fix than issues found post-layout",
    ],
    year: "2025",
  },
  {
    id: 2,
    title: "2-Bit Adder - RTL to GDSII Implementation (ASAP 7nm FinFET)",
    description: "Designed and verified a 2-bit adder in Verilog and carried it end-to-end through synthesis and automated place-and-route to a silicon-ready signoff.",
    tags: ["Verilog", "ModelSim", "Synopsys Design Compiler", "Cadence Innovus"],
    category: "ASIC / VLSI Design",
    github: null,
    demo: null,
    image: null,
    highlights: [
      "Built functional verification testbenches covering all input combinations",
      "Ran post-synthesis verification to confirm gate-level equivalence",
      "Validated post-route DRC/LVS after completing the full APR flow",
    ],
    workflow: [
      { step: "RTL Design", description: "Designed the 2-bit adder logic in Verilog." },
      { step: "Functional Verification", description: "Built testbenches in ModelSim covering all input combinations to confirm correct behavior." },
      { step: "Logic Synthesis", description: "Synthesized the RTL using Synopsys Design Compiler targeting the ASAP 7nm FinFET library." },
      { step: "Post-Synthesis Verification", description: "Confirmed gate-level equivalence against the original RTL." },
      { step: "Automated Place & Route", description: "Completed the full APR flow in Cadence Innovus - floorplanning, placement, CTS, and routing." },
      { step: "GDSII Signoff", description: "Validated post-route DRC/LVS, closing the loop from RTL through silicon-ready signoff." },
    ],
    problem: "Needed a small, well-understood design to practice and prove out the complete RTL-to-GDSII flow end-to-end, from Verilog through a silicon-ready signoff, on a leading-edge FinFET library.",
    approach: "Designed the 2-bit adder logic in Verilog and wrote testbenches exercising every input combination in ModelSim. After functional verification, the RTL was synthesized in Synopsys Design Compiler targeting the ASAP 7nm FinFET library, followed by post-synthesis verification to confirm gate-level equivalence. The gate-level netlist then went through the full automated place-and-route flow in Cadence Innovus.",
    toolsUsed: [
      { name: "Verilog", purpose: "RTL design of the adder logic" },
      { name: "ModelSim", purpose: "Functional verification testbenches covering all input combinations" },
      { name: "Synopsys Design Compiler", purpose: "Logic synthesis targeting the ASAP 7nm FinFET library" },
      { name: "Cadence Innovus", purpose: "Automated place-and-route (floorplanning, placement, CTS, routing)" },
    ],
    results: [
      "Confirmed gate-level equivalence between RTL and the synthesized netlist through post-synthesis verification",
      "Closed the full APR flow with a clean post-route DRC/LVS signoff",
      "Completed the loop from RTL through a silicon-ready GDSII signoff on a 7nm FinFET library",
    ],
    challenges: [
      { challenge: "Ensuring the synthesized gate-level netlist stayed functionally equivalent to the original RTL", solution: "Ran dedicated post-synthesis verification to check gate-level equivalence before proceeding to physical design." },
      { challenge: "Meeting clean DRC/LVS on a leading-edge 7nm FinFET library", solution: "Iterated on the automated place-and-route flow in Cadence Innovus until post-route checks came back clean." },
    ],
    learnings: [
      "How each stage of the ASIC flow - RTL, synthesis, and physical design - depends on rigorous verification at the stage before it",
      "Practical experience with the specific constraints and cell characteristics of FinFET-based standard cell libraries",
    ],
    year: "2025",
  },
  {
    id: 3,
    title: "4-Bit Adder Design and Implementation (SAED 32nm)",
    description: "Designed and implemented a transistor-level 4-bit mirror adder in Cadence Virtuoso, integrating 1-bit adder cells and inverters, with full physical verification closure.",
    tags: ["Cadence Virtuoso", "Transistor-Level Design", "32nm PDK", "DRC/LVS"],
    category: "Physical Design",
    github: null,
    demo: null,
    image: null,
    highlights: [
      "Analyzed worst-case delay, average power, and layout area trade-offs",
      "Identified and addressed performance bottlenecks in the schematic",
      "Achieved DRC/LVS clean physical layout end-to-end",
    ],
    workflow: [
      { step: "Schematic Design", description: "Designed the transistor-level schematic for a 4-bit mirror adder, integrating 1-bit adder cells and inverters in Cadence Virtuoso." },
      { step: "Circuit Analysis", description: "Analyzed worst-case delay, average power, and layout area to evaluate design trade-offs and identify bottlenecks." },
      { step: "Physical Layout", description: "Implemented the transistor-level layout on the SAED 32nm PDK." },
      { step: "Physical Verification", description: "Achieved DRC/LVS clean physical layout, closing the loop from schematic through silicon-ready verification." },
    ],
    problem: "Wanted hands-on, transistor-level experience designing and verifying a circuit block from schematic through physical layout, rather than working only at the RTL/gate level.",
    approach: "Designed the transistor-level schematic for a 4-bit mirror adder in Cadence Virtuoso, integrating individual 1-bit adder cells and inverters. Analyzed worst-case delay, average power, and layout area to understand design trade-offs, then carried the design into physical layout on the SAED 32nm PDK, closing with DRC/LVS verification.",
    toolsUsed: [
      { name: "Cadence Virtuoso", purpose: "Transistor-level schematic capture and physical layout" },
      { name: "SAED 32nm PDK", purpose: "Process design kit for the transistor-level implementation" },
    ],
    results: [
      "Achieved a DRC/LVS clean physical layout, demonstrating end-to-end closure from schematic through physical verification",
      "Identified performance bottlenecks through worst-case delay, power, and area analysis",
    ],
    challenges: [
      { challenge: "Balancing delay, power, and layout area at the transistor level, where each metric trades off against the others", solution: "Systematically analyzed worst-case delay, average power, and layout area together to pinpoint where design changes would help most rather than optimizing one metric in isolation." },
    ],
    learnings: [
      "How transistor sizing and cell-level layout choices directly affect delay, power, and area at the circuit level",
      "The importance of closing DRC/LVS iteratively during layout rather than treating it as a final checkbox",
    ],
    year: "2025",
  },
  {
    id: 4,
    title: "Delay Optimization of Logic Path (32nm PDK)",
    description: "Designed a static CMOS logic path using standard cells and applied logical optimization techniques to minimize critical path delay.",
    tags: ["Static CMOS", "Timing Analysis", "Parasitic Extraction", "TCL Scripting"],
    category: "Physical Design",
    github: null,
    demo: null,
    image: null,
    highlights: [
      "Analyzed timing reports and parasitic extraction results for delay and power trade-offs",
      "Wrote scripted automation to compare performance across sizing iterations",
      "Validated optimization decisions against design targets",
    ],
    workflow: [
      { step: "Logic Path Design", description: "Designed a static CMOS logic path using standard cells from the 32nm PDK." },
      { step: "Delay Optimization", description: "Applied logical techniques such as gate sizing and restructuring to minimize critical path delay." },
      { step: "Timing & Parasitic Analysis", description: "Analyzed timing reports and parasitic extraction results to evaluate delay, power, and layout-dependent effects." },
      { step: "Scripted Validation", description: "Wrote scripted automation to compare performance across sizing iterations and validate optimization decisions against design targets." },
    ],
    problem: "Critical path delay is often the limiting factor for how fast a digital design can run; this project focused specifically on understanding and reducing that delay on a static CMOS logic path.",
    approach: "Designed a static CMOS logic path using standard cells from a 32nm PDK, then applied logical optimization techniques to minimize critical path delay. Timing reports and parasitic extraction results were analyzed to understand delay, power, and layout-dependent effects, and scripted automation was used to systematically compare performance across sizing iterations.",
    toolsUsed: [
      { name: "32nm Standard Cell PDK", purpose: "Standard cells for the static CMOS logic path" },
      { name: "TCL", purpose: "Scripted automation to compare performance across sizing iterations" },
    ],
    results: [
      "Reduced critical path delay through logical optimization techniques on the standard-cell logic path",
      "Validated optimization decisions against design targets using timing and parasitic extraction data",
    ],
    challenges: [
      { challenge: "Accounting for layout-dependent effects (parasitics) that aren't visible from pre-layout timing alone", solution: "Analyzed post-layout parasitic extraction results alongside timing reports to capture real, layout-dependent delay and power effects." },
      { challenge: "Comparing many sizing iterations efficiently by hand", solution: "Wrote scripted automation to run and compare sizing iterations systematically instead of manually re-checking each variant." },
    ],
    learnings: [
      "How parasitic extraction changes the picture of delay and power versus pre-layout estimates",
      "The efficiency gained from scripting repetitive design-space exploration instead of doing it manually",
    ],
    year: "2025",
  },
  {
    id: 5,
    title: "Synchronous FIFO - UVM Verification",
    description: "An 8-deep, 8-bit synchronous FIFO in Verilog verified with a full UVM testbench - directed tests, constrained-random stimulus, functional coverage, and SystemVerilog Assertions, following industry coverage-driven verification methodology.",
    tags: ["SystemVerilog", "UVM", "Verilog", "SVA", "Functional Coverage", "Cadence Xcelium"],
    category: "Design Verification",
    github: "https://github.com/adityapkogri336/sync-fifo-uvm-verification",
    demo: null,
    image: null,
    highlights: [
      "Built a complete reusable UVM environment - driver, monitor, scoreboard, and functional coverage",
      "Drove weighted-random (60/40 write/read) sequences to generate realistic mixed traffic",
      "Bound an SVA checker to the DUT via 'bind' with zero changes to the RTL source",
    ],
    workflow: [
      { step: "RTL Design", description: "Designed a parameterized synchronous FIFO in Verilog (rtl/sync_fifo.v) with independent write/read logic gated by full/empty flags derived combinationally from wrap-bit pointers." },
      { step: "Directed Testbench", description: "Wrote a self-checking directed SystemVerilog testbench that writes/reads known values and explicitly drives the FIFO to full/empty to test overflow/underflow guards." },
      { step: "UVM Environment Build", description: "Built a complete reusable UVM testbench: interface, randomizable transactions (weighted 60/40 write/read), driver, monitor, scoreboard modeling expected FIFO contents in a queue, and standard agent/env/test hierarchy." },
      { step: "Constrained-Random Verification", description: "Ran weighted-random sequences to generate realistic mixed read/write traffic, surfacing interactions directed tests wouldn't think to write." },
      { step: "Functional Coverage Analysis", description: "Measured toggle coverage on wr_en/rd_en/full/empty plus cross coverage on (full, wr_en) and (empty, rd_en). Random testing alone reached only 83.33% coverage since the FIFO was never driven to full." },
      { step: "Coverage-Driven Test Writing", description: "Wrote a new directed fifo_fill_sequence specifically to force the FIFO to full=1, closing the coverage gap and reaching 100% functional coverage." },
      { step: "Assertion-Based Checking", description: "Wrote 3 SystemVerilog Assertions checking structural protocol invariants (full/empty mutual exclusion, no state change on write-while-full or read-while-empty), bound to the DUT externally via 'bind' with zero changes to the RTL source." },
      { step: "Debug & Signoff", description: "Root-caused and fixed 4 real timing/race-condition bugs using signal traces, then reached final signoff: 100% functional coverage, 0 scoreboard errors, 0 assertion violations on Cadence Xcelium 25.03." },
    ],
    problem: "Build a verification environment that catches bugs an ad-hoc test would miss — overflow/underflow corruption, race conditions between driver and DUT, and structural protocol violations — rather than just confirming the FIFO works once.",
    approach: "Designed a parameterized synchronous FIFO (configurable depth/width) using extra 'wrap' bits on the read/write pointers to distinguish full from empty at the same index. Built two testbenches side by side: a self-checking directed SystemVerilog testbench, and a complete reusable UVM environment (interface, randomizable transactions, sequences, driver, monitor, scoreboard, functional coverage, and a bind-based SVA checker) following a standard coverage-driven verification flow.",
    toolsUsed: [
      { name: "Cadence Xcelium 25.03", purpose: "UVM 1.2 simulation and functional coverage" },
      { name: "SystemVerilog / UVM", purpose: "Testbench, sequences, driver/monitor/scoreboard architecture" },
      { name: "SystemVerilog Assertions (SVA)", purpose: "Independent protocol checking via bind-based checker" },
      { name: "EDA Playground", purpose: "Cloud-based simulation environment for running the regression" },
    ],
    results: [
      "100% functional coverage across all coverpoints and crosses",
      "0 scoreboard errors, 0 assertion violations at final signoff",
      "Found and root-caused 4 real timing/race-condition bugs via signal tracing (not trial and error)",
      "Closed an 83.33% -> 100% coverage gap by writing a targeted directed sequence to force the FIFO to full",
    ],
    challenges: [
      { challenge: "A reset race where the first transaction could be driven before reset was released", solution: "Root-caused via signal traces and fixed by correctly sequencing driver start relative to reset deassertion" },
      { challenge: "A driver/DUT signal race from driving inputs on the same clock edge the DUT samples them", solution: "Adjusted driver timing relative to the clocking scheme to respect SystemVerilog non-blocking assignment semantics" },
      { challenge: "Monitor sampling rd_data before the DUT's non-blocking assignment had settled", solution: "Corrected monitor sampling point to occur after NBA updates settle" },
      { challenge: "A monitor status-flag race where 'empty' transitioning on the same edge as a successful read caused that read to be silently dropped", solution: "Fixed monitor logic to correctly capture the read transaction before the flag transition was observed" },
    ],
    learnings: [
      "Deepened understanding of SystemVerilog non-blocking assignment semantics and how they drive real race conditions in driver/monitor design",
      "Coverage-driven verification: random testing alone doesn't guarantee reaching every state — functional coverage has to be measured and gaps closed with targeted directed tests",
      "bind-based assertion checkers let you verify a DUT's structural contract without ever touching the RTL source",
    ],
    year: "2026",
  },
];

export const experience = [
  {
    id: 1,
    role: "GET Trainee - Cloud (IT Team)",
    company: "Teleindia Networks Pvt Ltd",
    duration: "Jul 2024 – Dec 2024",
    type: "Industry",
    description: "Worked on the IT/Cloud team, building Linux proficiency and web development experience later applied to EDA and verification workflows.",
    bullets: [
      "Managed and configured Windows and Linux virtual machines, building proficiency in Linux-based environments used across EDA and verification workflows",
      "Developed the DataGraph web application using PHP, HTML, CSS, and JavaScript, applying structured debugging and version-controlled development practices",
      "Deployed and maintained applications on cloud-based servers, gaining exposure to regression management and CI/CD pipelines",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science - Electrical Engineering",
    school: "Arizona State University",
    location: "Tempe, AZ",
    duration: "2024 – 2026",
    gpa: "3.42 / 4.0",
    focus: "ASIC / VLSI Design",
    coursework: ["VLSI Design", "ASIC Design Flow", "Digital Systems and Circuits", "Verilog HDL", "Digital Verification and Testing", "Python"],
    thesis: null,
  },
  {
    degree: "Bachelor of Science - Electrical and Electronics Engineering",
    school: "University Visveswaraya College of Engineering",
    location: "Bengaluru, India",
    duration: "2020 – 2024",
    gpa: "8.11 / 10",
    focus: "Electronics & Communications",
    coursework: ["Digital Signal Processing", "Analog Integrated Circuits", "CMOS Transistors", "Microcontrollers"],
    thesis: null,
  },
];

export const publications: { title: string; venue: string; authors: string; link: string; type: string }[] = [];

export const certifications: { name: string; issuer: string; year: string }[] = [];
