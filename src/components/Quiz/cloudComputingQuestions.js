const cloudConceptQuestions = [
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What is Microsoft Azure??",
    correct_answer: "A cloud computing platform",
    incorrect_answers: ["E-mail", "A new laptop", "Software"],
    options: [
      "A cloud computing platform",
      "software",
      "A new laptop",
      "E-mail",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What cloud based service does Azure provide?",
    correct_answer: "Remote storage",
    incorrect_answers: ["Oracle", "Express", "GPU"],
    options: ["Oracle", "Express", "GPU", "Remote storage"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What cloud based service does Azure provide?",
    correct_answer: "Database hosting",
    incorrect_answers: ["Business networking", "On-Prem", "Database mining"],
    options: [
      "Business networking",
      "On-Prem",
      "Database mining",
      "Database hosting",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What cloud based service does Azure provide?",
    correct_answer: "Centralized account management",
    incorrect_answers: ["Local storage", "Database extraction", "Fun"],
    options: [
      "Local storage",
      "Database extraction",
      "Centralized account management",
      "Dragon&#039;s Lair",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What is cloud computing?",
    correct_answer:
      "Cloud computing is the delivery of computing services over the internet",
    incorrect_answers: [
      "Cloud computing is the delivery of top secret information",
      "Cloud computing is the delivery of systems",
      "Cloud computing is the delivery of pizza",
    ],
    options: [
      "Cloud computing is the delivery of computing services over the internet",
      "Cloud computing is the delivery of top secret information",
      "Cloud computing is the delivery of systems",
      "Cloud computing is the delivery of pizza",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What is a computing service??",
    correct_answer: "Virtual machines",
    incorrect_answers: ["Hardware updates", "Administrative tasks", "Speed"],
    options: [
      "Administrative tasks",
      "Speed",
      "Virtual machines",
      "Hardware updates",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "Select all computing service?",
    correct_answer: "Virtual Machines, Storage, Databases, and Networking",
    incorrect_answers: [
      "Data, Points, Expressions, and Lambda",
      "VMs and Databases",
      "VMs, Hardware, Updates, Downloads",
    ],
    options: [
      "Data, Points, Expressions, and Lambda",
      "VMs and Databases",
      "VMs, Hardware, Updates, Downloads",
      "Virtual Machines, Storage, Databases, and Networking",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What is the Shared Responsibility Model?",
    correct_answer:
      "The Shared Responsibility Model informs the level of responsibility the Owner (i.e., *Vendor*) and the Cloud Provider have across each domain, i.e., IaaS, PaaS, and SaaS",
    incorrect_answers: [
      "The Shared Responsibility Model informs the level of responsibility the Business .",
      "Is a non-related cloud concept",
      "Ensures the Cloud Provider pays the correct amount of taxes per service provided.",
    ],
    options: [
      "Is a non-related cloud concept",
      "Ensures the Cloud Provider pays the correct amount of taxes per service provided.",
      "The Shared Responsibility Model informs the level of responsibility the Owner (i.e., *Vendor*) and the Cloud Provider have across each domain, i.e., IaaS, PaaS, and SaaS",
      "The Shared Responsibility Model informs the level of responsibility the Business.",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What is always the responsibility of the cloud service provider",
    correct_answer: "physical datacenter, network, and hosts",
    incorrect_answers: ["Microsoft", "Edge", "Modelling"],
    options: [
      "Edge",
      "Modelling",
      "physical datacenter, network, and hosts",
      "Microsoft",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question:
      "Depending on your service model (IaaS, PaaS, or SaaS) your responsibiities will vary?",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What was the first interactive movie video game?",
    correct_answer: "Astron Belt",
    incorrect_answers: ["Dragon&#039;s Lair", "Cube Quest", "M.A.C.H. 3"],
    options: ["Cube Quest", "M.A.C.H. 3", "Astron Belt", "Dragon&#039;s Lair"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What was the first interactive movie video game?",
    correct_answer: "Astron Belt",
    incorrect_answers: ["Dragon&#039;s Lair", "Cube Quest", "M.A.C.H. 3"],
    options: ["Cube Quest", "M.A.C.H. 3", "Astron Belt", "Dragon&#039;s Lair"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What is the Private Cloud",
    correct_answer: "It is a cloud that is used by a single entity",
    incorrect_answers: [
      "It is a third part cloud",
      "it is a highly available cloud",
      "It is a cloud platform",
    ],
    options: [
      "it is a highly available cloud",
      "It is a cloud platform",
      "Astron Belt",
      "It is a third part cloud",
      "It is a cloud that is used by a single entity",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What is Public Cloud?",
    correct_answer:
      "A public cloud is built, controlled, and maintained by a third-party cloud provider",
    incorrect_answers: [
      "A public cloud is built, controlled, by Steve",
      "A public cloud is built for the backup storage only",
      "a public cloud is built for a dedicated onsite datacenter",
    ],
    options: [
      "A public cloud is built for the backup storage only",
      "a public cloud is built for a dedicated onsite datacenter",
      "A public cloud is built, controlled, and maintained by a third-party cloud provider",
      "A public cloud is built, controlled, by Steve",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What is a Hybrid Cloud",
    correct_answer:
      "A hybrid cloud is a computing environment that uses both public and private clouds in an inter-connected environment",
    incorrect_answers: [
      "A hybrid cloud is a computing environment that uses fibre optics",
      "Is always more 50/50 public to private ratio",
      "Built for improved speed.",
    ],
    options: [
      "Is always more 50/50 public to private ratio",
      "Built for improved speed.",
      "A hybrid cloud is a computing environment that uses both public and private clouds in an inter-connected environment",
      "A hybrid cloud is a computing environment that uses fibre optics",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "Identify an appropriate use case for IaaS?",
    correct_answer: "Test and development",
    incorrect_answers: ["Lifecycle", "Error driven development", "Analytics"],
    options: [
      "Lifecycle",
      "Error driven development",
      "Analytics",
      "Test and development",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "Identify an appropriate use case for PaaS?",
    correct_answer: "Business intelligence",
    incorrect_answers: ["Email", "Messaging", "Lift and shift"],
    options: ["Messaging", "Lift and shift", "Business intelligence", "Email"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What is the consumption-based model?",
    correct_answer: "Pay-as-you-go",
    incorrect_answers: ["CapEx", "Monthly billing cycle", "Pay-up-front"],
    options: ["Monthly", "Pay-up-front", "Pay-as-you-go", "CapEx"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What are the benefits of the consumption-based model?",
    correct_answer:
      "No upfront costs and ability to pay for more resources as needed",
    incorrect_answers: ["Defined contract", "Defined term", "All of the above"],
    options: [
      "Defined contract",
      "Defined term",
      "All of the above",
      "No upfront costs and ability to pay for more resources as needed",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What are the the benefits of the consumption-based model?",
    correct_answer: "All of the above",
    incorrect_answers: [
      "No need to purchase infrastructure that may sit unused",
      "Stop paying for resource when they are no longer needed",
      "Pay for more resources when needed",
    ],
    options: [
      "No need to purchase infrastructure that may sit unused",
      "Stop paying for resource when they are no longer needed",
      "Pay for more resources when needed",
      "All of the above",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "Compare the cloud pricing models -- How does OpEx help?",
    correct_answer: "All of the Above",
    incorrect_answers: [
      "Plan and manage operating costs",
      "Run your own infrastructure more efficiently",
      "Scale as your business needs change",
    ],
    options: [
      "Plan and manage operating costs",
      "Run your own infrastructure more efficiently",
      "Scale as your business needs change",
      "All of the Above",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question:
      "Which cloud model uses some datacenters focused on providing cloud services to anyone that wants them, and some data centers that are focused on a single customer?",
    correct_answer: "Hybrid cloud",
    incorrect_answers: ["Community Cloud", "Private", "Public"],
    options: ["Community Cloud", "Private", "Public", "Hybrid cloud"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question:
      "According to the shared responsibility model, which cloud service type places the most responsibility on the customer?",
    correct_answer: "IaaS",
    incorrect_answers: ["SaaS", "PaaS", "DaaS"],
    options: ["SaaS", "PaaS", "DaaS", "IaaS"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What is High availability?",
    correct_answer:
      "High availability focuses on ensuring maximum availability, regardless of disruptions or events that may occur",
    incorrect_answers: [
      "High availability focuses on ensuring maximum security",
      "High availability focuses on ensuring maximum processing",
      "High availability focuses on ensuring maximum maintanence regardless of conditions",
    ],
    options: [
      "High availability focuses on ensuring maximum availability, regardless of disruptions or events that may occur",
      "High availability focuses on ensuring maximum security",
      "High availability focuses on ensuring maximum processing",
      "High availability focuses on ensuring maximum maintanence regardless of conditions",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What is Scalability??",
    correct_answer: "The ability to adjust resources to meet demand",
    incorrect_answers: [
      "the ability to flex",
      "the ability to withstand disaster",
      "None of the above",
    ],
    options: [
      "the ability to withstand disaster",
      "None of the above",
      "The ability to adjust resources to meet demand",
      "the ability to flex",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question:
      "Vertical Scaling is ability to increase or decrease CPU or RAM to the VM?",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question:
      "Horizontal Scaling is the ability to add or remove VMs or containers?",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "What are the benefits of the cloud?",
    correct_answer: "all of the above",
    incorrect_answers: ["reliability", "predictability", "availability"],
    options: [
      "predictability",
      "availability",
      "all of the above",
      "Dragonreliability",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question:
      "Reliability is the ability of a system to recover from failures and continue to function?",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "Predictability in the cloud is focused on what?",
    correct_answer: "Performance and Cost",
    incorrect_answers: [
      "Perfomance and Reliability",
      "Cost and Availability",
      "Hardware and Software",
    ],
    options: [
      "Cost and Availability",
      "Hardware and Software",
      "Performance and Cost",
      "Perfomance and Reliability",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question:
      "Performance predictability focuses on predicting the resources needed to deliver a positive experience for your customers",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True, False"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question:
      "Autoscaling, load balancing, and high availability are just some of the cloud concepts that support performance predictability",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True, False"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "Cost predictability is focused on predicting customer impact.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    options: ["True, False"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "Benefits of Governance in the Cloud",
    correct_answer: "All of the above",
    incorrect_answers: [
      "set templates help ensure that all your deployed resources meet corporate standards ",
      "set templates help ensure that all your deployed resources meet governmemt regulatory requirements",
      "update all your deployed resources to new standards as standards change",
      "Cloud-based auditing helps flag any resource that’s out of compliance with your corporate standards and provides mitigation strategies",
    ],
    options: [
      "set templates help ensure that all your deployed resources meet corporate standards ",
      "set templates help ensure that all your deployed resources meet governmemt regulatory requirements",
      "update all your deployed resources to new standards as standards change",
      "Cloud-based auditing helps flag any resource that’s out of compliance with your corporate standards and provides mitigation strategies",
      "All of the above",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "Benefits of Security in the Cloud",
    correct_answer: "All of the above",
    incorrect_answers: [
      "Maximum control of security via IaaS",
      "patches and maintenance taken care of automatically via PaaS",
    ],
    options: [
      "Maximum control of security via IaaS",
      "patches and maintenance taken care of automatically via PaaS",
      "All of the above",
    ],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "Which item is not a part of Management in the Cloud?",
    correct_answer: "Azure One Interface",
    incorrect_answers: ["Web Portal", "CLI", "APIs", "PowerShell"],
    options: ["Web Portal", "CLI", "APIs", "PowerShell", "Azure One Interface"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question:
      "Management of the cloud speaks to managing your cloud resources. In the cloud, you can: Automatically scale resource deployment based on need",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question:
      "Management of the cloud speaks to managing your cloud resources. In the cloud, you can: Automatically scale resource deployment based on need. Deploy resources based on a preconfigured template, removing the need for manual configuration. Monitor the health of resources and automatically replace failing resources. Receive automatic alerts based on configured metrics, so you’re aware of performance in real-time.",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["False", "True"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question:
      "Which type of scaling involves adding or removing resources (such as virtual machines or containers) to meet demand?",
    correct_answer: "Horizontal Scaling",
    incorrect_answers: ["Vertical Scaling, Direct Scaling"],
    options: ["Vertical Scaling, Direct Scaling", "Horizontal Scaling"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question:
      "What is characterized as the ability of a system to recover from failures and continue to function?",
    correct_answer: "Reliability",
    incorrect_answers: ["Predictability", "Scalability"],
    options: ["Predictability", "Scalability", "Reliability"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question:
      "In the IaaS model, the cloud provider is responsible for the operating system installation, configuration, and maintenance; network configl database and storage config, etc.?",
    correct_answer: "False",
    incorrect_answers: ["True"],
    options: ["True", "False"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question:
      "Infrastructure as a service (IaaS) is the most flexible category of cloud services, as it provides you the maximum amount of control for your cloud resources.",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question:
      "In a PaaS environment, the cloud provider maintains the physical infrastructure, physical security, and connection to the internet. They also maintain the operating systems, middleware, development tools, and business intelligence services that make up a cloud solution.",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 1, // Describe Cloud Concepts
    type: "multiple",
    difficulty: "medium",
    question: "SaaS is the most flexible cloud model",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["False", "True"],
  },
];

export default cloudConceptQuestions;
