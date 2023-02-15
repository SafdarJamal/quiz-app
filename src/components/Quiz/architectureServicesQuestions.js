const architectureAndServicesQestions = [
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is a Region?",
    correct_answer:
      "A region is a geographical area on the planet that contains at least one data center",
    incorrect_answers: [
      "A region is a geographical area on the planet that contains at least one database",
      "A region is a geographical area on the planet that contains a bandwidth connection",
      "A region is a geographical area on the planet that contains at least one host",
    ],
    options: [
      "A region is a geographical area on the planet that contains at least one database",
      "A region is a geographical area on the planet that contains a bandwidth connection",
      "A region is a geographical area on the planet that contains at least one host",
      "A region is a geographical area on the planet that contains at least one data center",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is an Availability Zone?",
    correct_answer:
      "Availability zones are physically separate datacenters within an Azure region.",
    incorrect_answers: [
      "Availability zones are virtually separate datacenters within an Azure region.",
      "Availability zones are located on premise.",
    ],
    options: [
      "Availability zones are physically separate datacenters within an Azure region.",
      "Availability zones are virtually separate datacenters within an Azure region.",
      "Availability zones are located on premise.",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "Each availability zone is made up of one or more datacenters equipped with independent power, cooling, and networking.",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "An availability zone is set up to be an accessibility zone?",
    correct_answer: "False",
    incorrect_answers: ["True"],
    options: ["True", "False"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is Zonal Services?",
    correct_answer: "You pin the resource to a specific zone",
    incorrect_answers: [
      "The platform replicates automatically across zones (for example, zone-redundant storage, SQL Database).",
      "Services are always available from Azure geographies and are resilient to zone-wide outages as well as region-wide outages.",
    ],
    options: [
      "You pin the resource to a specific zone",
      "The platform replicates automatically across zones (for example, zone-redundant storage, SQL Database).",
      "Services are always available from Azure geographies and are resilient to zone-wide outages as well as region-wide outages.",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is Zone-redundant services?",
    correct_answer: "The platform replicates automatically across zones",
    incorrect_answers: [
      "You pin the resource to a specific zone",
      "Services are always available from Azure geographies and are resilient to zone-wide outages as well as region-wide outages.",
    ],
    options: [
      "You pin the resource to a specific zone",
      "The platform replicates automatically across zones (for example, zone-redundant storage, SQL Database).",
      "Services are always available from Azure geographies and are resilient to zone-wide outages as well as region-wide outages.",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What are Region Pairs??",
    correct_answer: "All of the above",
    incorrect_answers: [
      "Region pairs are at minimum 300 miles apart",
      "Region pairs exist to reduce the impact on availability caused by a natural disaster or power outage",
      "Region pairs allow you to configure automatic replication and failover for certain Azure services",
    ],
    options: [
      "Region pairs are at minimum 300 miles apart",
      "Region pairs exist to reduce the impact on availability caused by a natural disaster or power outage",
      "Region pairs allow you to configure automatic replication and failover for certain Azure services",
      "All of the above",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "Sovereign Regions are instances of Azure that are isolated from the main instance of Azure?",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is an example of an Azure resource?",
    correct_answer: "All of the above",
    incorrect_answers: ["Virtual Machines", "virtual networks", "databases"],
    options: [
      "All of the above",
      "Virtual Machines",
      "virtual networks",
      "databases",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "Describe an Azure Subscription",
    correct_answer:
      "A subscription is a unit of management, billing, and scale",
    incorrect_answers: [
      "A subscription is a unit of sale",
      "A subscription is a unit of scale",
      "A subscription is a unit of operational management",
    ],
    options: [
      "A subscription is a unit of sale",
      "A subscription is a unit of scale",
      "A subscription is a unit of operational management",
      "A subscription is a unit of management, billing, and scale",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "Select the correct Subscription Boundaries?",
    correct_answer: "Billing and Access control boundary",
    incorrect_answers: [
      "Temporary Access and Billing control boundary",
      "Unrestricted Access and Management control boundary",
      "Regional and Access control boundary",
    ],
    options: [
      "Temporary Access and Billing control boundary",
      "Unrestricted Access and Management control boundary",
      "Regional and Access control boundary",
      "Billing and Access control boundary",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "Billing boundary detemines how an Azure account is billed for using Azure?",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is the purpose of a Management Group?",
    correct_answer: "To simplify security, account, and subscription handling",
    incorrect_answers: [
      "To enhance account management and accessibility",
      "To manage security risks and billing",
    ],
    options: [
      "To enhance account management and accessibility",
      "To manage security risks and billing",
      "To simplify security, account, and subscription handling",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "Select the incorrect statement about Management Groups",
    correct_answer: "None of the above",
    incorrect_answers: [
      "10,000 management groups can be supported in a single directory.",
      "A management group tree can support up to six levels of depth. This limit doesn't include the root level or the subscription level.",
      "Each management group and subscription can support only one parent.",
    ],
    options: [
      "10,000 management groups can be supported in a single directory.",
      "A management group tree can support up to six levels of depth. This limit doesn't include the root level or the subscription level.",
      "Each management group and subscription can support only one parent.",
      "None of the above",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "How many resource groups can a resource be in at the same time?",
    correct_answer: "1",
    incorrect_answers: ["2", "3", "4"],
    options: ["1", "2", "3", "4,"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "What happens to the resources within a resource group when an action or setting at the Resource Group level is applied?",
    correct_answer: "The setting is applied to current and future resources.",
    incorrect_answers: [
      "Current resources inherit the setting, but future resources don't.",
      "Future resources inherit the setting, but current ones don't.",
    ],
    options: [
      "Current resources inherit the setting, but future resources don't.",
      "Future resources inherit the setting, but current ones don't.",
      "The setting is applied to current and future resources.",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "What Azure feature replicates resources across regions that are at least 300 miles away from each other?",
    correct_answer: "Region pairs",
    incorrect_answers: ["Availability Zones", "Sovereign Regions"],
    options: ["Availability Zones", "Sovereign Regions", "Region pairs"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "Virtual Machines (VMs) are the ideal choice when you need?",
    correct_answer: "All of the above",
    incorrect_answers: [
      "Total control over the operating system (OS).",
      "The ability to run custom software.",
      "To use custom hosting configurations.",
    ],
    options: [
      "All of the above",
      "Total control over the operating system (OS).",
      "The ability to run custom software.",
      "To use custom hosting configurations.",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "Virtual machine scale sets let you create and manage a group of identical, load-balanced VMs?",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "Availability sets are designed to ensure that VMs stagger updates and have varied power and network connectivity, preventing you from losing all your VMs with a single network or power failure.",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is an Update Domain?",
    correct_answer:
      "The update domain groups VMs that can be rebooted at the same time",
    incorrect_answers: [
      "The update domain groups VMs that are out of sync",
      "The update domain groups VMs that need to be re-installed",
    ],
    options: [
      "The update domain groups VMs that are out of sync",
      "The update domain groups VMs that need to be re-installed",
      "The update domain groups VMs that can be rebooted at the same time",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is a Fault Domain?",
    correct_answer:
      "The fault domain groups your VMs by common power source and network switch",
    incorrect_answers: [
      "The fault domain groups your VMs by common domain name",
      "The fault domain groups VMs that can be rebooted at the same time",
    ],
    options: [
      "The fault domain groups your VMs by common domain name",
      "The fault domain groups VMs that can be rebooted at the same time",
      "The fault domain groups your VMs by common power source and network switch",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is a common use case for VMs?",
    correct_answer: "All of the above",
    incorrect_answers: [
      "testing and development",
      "running applications in the cloud",
      "extending your datacenter to the cloud",
      "disaster recovery",
      "lift and shift",
    ],
    options: [
      "testing and development",
      "running applications in the cloud",
      "extending your datacenter to the cloud",
      "disaster recovery",
      "lift and shift",
      "All of the above",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "When provisioning a VM you will have to select which associated resources?",
    correct_answer: "All of the above",
    incorrect_answers: ["Size", "Storage disks", "Networking"],
    options: ["Size", "Storage disks", "Networking", "All of the above"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is Azure Virtual Desktop",
    correct_answer:
      "Enables the utilization of a cloud-hosted version of Windows from any location",
    incorrect_answers: [
      "Enables Azure Remote Operating System",
      "Enables remote iOS development",
    ],
    options: [
      "Enables the utilization of a cloud-hosted version of Windows from any location",
      "Enables Azure Remote Operating System",
      "Enables remote iOS development",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is a Container?",
    correct_answer:
      "Containers are a virtualization environment for running applications",
    incorrect_answers: [
      "Containers are an emulation of a computer",
      "Containers are a logical devision of a physical computing resource",
    ],
    options: [
      "Containers are a virtualization environment for running applications",
      "Containers are an emulation of a computer",
      "Containers are a logical devision of a physical computing resource",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "Containers require operating systme to run applications?",
    correct_answer: "False",
    incorrect_answers: ["True"],
    options: ["True", "False"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the difference between Containers and Virtual Machines??",
    correct_answer:
      "VMs virtualizes the hardware of a computer whereas Containers virtualize the Operating System",
    incorrect_answers: [
      "VMs virtualizes the software of a computer whereas Containers virtualize the hardware",
      "VMs virtualizes and Containers virtualize the Operating System",
      "VMs virtualizes the Operating System of a computer whereas Containers virtualize the hardware",
    ],
    options: [
      "VMs virtualizes the software of a computer whereas Containers virtualize the hardware",
      "VMs virtualizes and Containers virtualize the Operating System",
      "VMs virtualizes the Operating System of a computer whereas Containers virtualize the hardware",
      "VMs virtualizes the hardware of a computer whereas Containers virtualize the Operating System",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is Azure Functions?",
    correct_answer:
      "Azure Functions is an event-driven, serverless compute option that doesn’t require maintaining virtual machines or containers.",
    incorrect_answers: [
      "Azure Functions do not require maintaining hyper-visor or containers.",
      "Azure Functions do not require maintaining data or resources.",
    ],
    options: [
      "Azure Functions is an event-driven, serverless compute option that doesn’t require maintaining virtual machines or containers.",
      "Azure Functions do not require maintaining hyper-visor or containers.",
      "Azure Functions do not require maintaining data or resources.",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "Unlike VMs and Containers, Azure Functions...",
    correct_answer: "Are executed based on a triggering event",
    incorrect_answers: [
      "Consume more resources",
      "Require more supervision",
      "Are unreliable",
    ],
    options: [
      "Consume more resources",
      "Require more supervision",
      "Are unreliable",
      "Are executed based on a triggering event",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "Why are Azure Functions idea when demand is variable??",
    correct_answer: "Azure Functions automatically scale based on demand",
    incorrect_answers: [
      "Azure Functions automatically scale based on demand",
      "Azure Functions require less monitoring",
    ],
    options: [
      "Azure Functions automatically scale based on demand",
      "Azure Functions automatically scale based on demand",
      "Azure Functions require less monitoring",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "Select the best use case for Azure Functions?",
    correct_answer: "All of the above",
    incorrect_answers: [
      "Run code without the full application",
      "Execute a script to process a file",
      "Update a database table",
      "Send a message",
    ],
    options: [
      "Run code without the full application",
      "Execute a script to process a file",
      "Update a database table",
      "Send a message",
      "All of the above",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "Azure App Service enables you to build and host web apps, background jobs, mobile back-ends, and RESTful APIs in the programming language of your choice without managing infrastructure?",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "Select the option with the correct Azure Hosting Options?",
    correct_answer: "Web Apps, API Apps, WebJobs, Mobile Apps",
    incorrect_answers: [
      "Web Containers, API Apps, WebAPIs, Mobile",
      "Azure Web, App APIs, Web Mobile,",
      "Web VM, API Jobs, API Mobile, WebJobs",
    ],
    options: [
      "Web Containers, API Apps, WebAPIs, Mobile",
      "Azure Web, App APIs, Web Mobile,",
      "Web VM, API Jobs, API Mobile, WebJobs",
      "Web Apps, API Apps, WebJobs, Mobile Apps",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "Azure virtual networks and virtual subnets enable Azure resources, such as VMs, web apps, and databases, to communicate with each other, with users on the internet, and with your on-premises client computers?",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "Azure virtual networks provide the following key networking capabilities...",
    correct_answer: "All of the above",
    incorrect_answers: [
      "Isolation and segmentation",
      "Internet communications",
      "Communicate between Azure resources",
      "Communicate with on-premises resources",
      "Route network traffic",
      "Filter network traffic",
      "Connect virtual networks",
    ],
    options: [
      "Isolation and segmentation",
      "Internet communications",
      "Communicate between Azure resources",
      "Communicate with on-premises resources",
      "Route network traffic",
      "Filter network traffic",
      "Connect virtual networks",
      "All of the above",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "A virtual private network (VPN) uses an encrypted tunnel within another network. VPNs are typically deployed to connect two or more trusted private networks to one another over an untrusted network (typically the public internet).",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "Fill in the blank: You can deploy _____ VPN gateway in each virtual network",
    correct_answer: "One",
    incorrect_answers: ["Two", "Three", "No Limit"],
    options: ["One", "Two", "Three", "No Limit"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "Fill in the lank: You can use ____ gateway to connect to multiple locations, which includes other virtual networks or on-premises datacenters?",
    correct_answer: "One",
    incorrect_answers: ["Two", "Three", "No Limit"],
    options: ["One", "Two", "Three", "No Limit"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "Use a route-based VPN gateway if you need any of the following types of connectivity...",
    correct_answer: "All of the above",
    incorrect_answers: [
      "Connections between virtual networks",
      "Point-to-site connections",
      "Multisite connections",
      "Coexistence with an Azure ExpressRoute gateway",
    ],
    options: [
      "Connections between virtual networks",
      "Point-to-site connections",
      "Multisite connections",
      "Coexistence with an Azure ExpressRoute gateway",
      "All of the above",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "Azure ExpressRoute lets you extend your on-premises networks into the Microsoft cloud over a public connection, with the help of a connectivity provider. ",
    correct_answer: "False",
    incorrect_answers: ["True"],
    options: ["True", "False"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "Which Azure Virtual Machine feature staggers updates across VMs based on their update domain and fault domain?",
    correct_answer: "Availability sets",
    incorrect_answers: ["Scale sets", "Update sets"],
    options: ["Scale sets", "Update sets", "Availability sets"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "Which Azure service allows users to use a cloud hosted version of Windows from any location and connect from most modern browsers?",
    correct_answer: "Azure Virtual Desktop",
    incorrect_answers: ["Azure Virtual Machines", "Azure Container Instances"],
    options: [
      "Azure Virtual Desktop",
      "Azure Virtual Machines",
      "Azure Container Instances",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "Fill in the blank: Azure DNS is a ______?",
    correct_answer:
      "hosting service for DNS domains that provides name resolution by using Microsoft Azure infrastructure",
    incorrect_answers: [
      "hosting service for internal applications on Microsoft Azure infrastructure",
      "hosting service for PaaS",
    ],
    options: [
      "hosting service for DNS domains that provides name resolution by using Microsoft Azure infrastructure",
      "hosting service for internal applications on Microsoft Azure infrastructure",
      "hosting service for PaaS",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What are the benefits of Azure DNS?",
    correct_answer: "All of the above",
    incorrect_answers: [
      "Reliability and performance",
      "Security",
      "Ease of Use",
      "Customizable virtual networks",
      "Alias records",
    ],
    options: [
      "All of the above",
      "Reliability and performance",
      "Security",
      "Ease of Use",
      "Customizable virtual networks",
      "Alias records",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "A storage account provides a unique namespace for your Azure Storage data that's accessible from anywhere in the world over HTTP or HTTPS?",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "Data in an Azure Storage account is ___ , ___ , ___ , ___ ?",
    correct_answer: "secure, highly available, durable, and scalable",
    incorrect_answers: ["accessible, high connectivity, moldable, scalable"],
    options: [
      "accessible, high connectivity, moldable, scalable",
      "secure, highly available, durable, and scalable",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is locally redundant storage?",
    correct_answer: "replication of data locally",
    incorrect_answers: [
      "replicates your data automatically across all zones in the region",
      "replication in primary and across geographical regions",
      "only available to be utilized by predetermined entities",
    ],
    options: [
      "replication of data locally",
      "replicates your data automatically across all zones in the region",
      "replication in primary and across geographical regions",
      "only available to be utilized by predetermined entities",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is zone redundant storage?",
    correct_answer:
      "replicates your data automatically across all zones in the region",
    incorrect_answers: [
      "replication of data locally",
      "replication in primary and across geographical regions",
      "only available to be utilized by predetermined entities",
    ],
    options: [
      "replication of data locally",
      "replicates your data automatically across all zones in the region",
      "replication in primary and across geographical regions",
      "only available to be utilized by predetermined entities",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is Geo Redundant Storage?",
    correct_answer: "replication in primary and across geographical regions",
    incorrect_answers: [
      "replicates your data automatically across all zones in the region",
      "only available to be utilized by predetermined entities",
    ],
    options: [
      "replicates your data automatically across all zones in the region",
      "only available to be utilized by predetermined entities",
      "replication in primary and across geographical regions",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question:
      "True or False: Geo Zone Redundant Storage, much like Geo Redundant except data in the secondary is only available to be utilized by the predetermined entities.",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is Azure Blobls?",
    correct_answer:
      "Object store for text and binary data, including big data analytics",
    incorrect_answers: [
      "Managed file shares for cloud or on-premises deployments.",
      "A messaging store for reliable messaging between application components.",
      "Block-level storage volumes for Azure VMs.",
    ],
    options: [
      "Managed file shares for cloud or on-premises deployments.",
      "A messaging store for reliable messaging between application components.",
      "Block-level storage volumes for Azure VMs.",
      "Object store for text and binary data, including big data analytics",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is Azure Files?",
    correct_answer: "Managed file shares for cloud or on-premises deployments.",
    incorrect_answers: [
      "Object store for text and binary data, including big data analytics",
      "A messaging store for reliable messaging between application components.",
      "Block-level storage volumes for Azure VMs.",
    ],
    options: [
      "Managed file shares for cloud or on-premises deployments.",
      "A messaging store for reliable messaging between application components.",
      "Block-level storage volumes for Azure VMs.",
      "Object store for text and binary data, including big data analytics",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is Azure Queues?",
    correct_answer:
      "A messaging store for reliable messaging between application components.",
    incorrect_answers: [
      "Object store for text and binary data, including big data analytics",
      "Managed file shares for cloud or on-premises deployments.",
      "Block-level storage volumes for Azure VMs.",
    ],
    options: [
      "Managed file shares for cloud or on-premises deployments.",
      "A messaging store for reliable messaging between application components.",
      "Block-level storage volumes for Azure VMs.",
      "Object store for text and binary data, including big data analytics",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is Azure Disks?",
    correct_answer:
      "Object store for text and binary data, including big data analytics",
    incorrect_answers: [
      "Managed file shares for cloud or on-premises deployments.",
      "A messaging store for reliable messaging between application components.",
      "Block-level storage volumes for Azure VMs.",
    ],
    options: [
      "Managed file shares for cloud or on-premises deployments.",
      "A messaging store for reliable messaging between application components.",
      "Block-level storage volumes for Azure VMs.",
      "Object store for text and binary data, including big data analytics",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "Hot access tier is ...",
    correct_answer: "Optimized for storing data that is accessed frequently",
    incorrect_answers: [
      "Optimized for data that is infrequently accessed and stored for at least 30 days",
      "Appropriate for data that is rarely accessed and stored for at least 180 days, with flexible latency requirements",
    ],
    options: [
      "Optimized for data that is infrequently accessed and stored for at least 30 days",
      "Appropriate for data that is rarely accessed and stored for at least 180 days, with flexible latency requirements",
      "Optimized for storing data that is accessed frequently",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "Cool access tier is ...",
    correct_answer:
      "Optimized for data that is infrequently accessed and stored for at least 30 days",
    incorrect_answers: [
      "Optimized for storing data that is accessed frequently",
      "Appropriate for data that is rarely accessed and stored for at least 180 days, with flexible latency requirements",
    ],
    options: [
      "Optimized for data that is infrequently accessed and stored for at least 30 days",
      "Appropriate for data that is rarely accessed and stored for at least 180 days, with flexible latency requirements",
      "Optimized for storing data that is accessed frequently",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "Archive access tier is ...",
    correct_answer:
      "Appropriate for data that is rarely accessed and stored for at least 180 days, with flexible latency requirements",
    incorrect_answers: [
      "Optimized for storing data that is accessed frequently",
      "Optimized for data that is infrequently accessed and stored for at least 30 days",
    ],
    options: [
      "Optimized for data that is infrequently accessed and stored for at least 30 days",
      "Appropriate for data that is rarely accessed and stored for at least 180 days, with flexible latency requirements",
      "Optimized for storing data that is accessed frequently",
    ],
  },
  {
    category: 2, // Describe Azure Architecture and Services
    type: "multiple",
    difficulty: "medium",
    question: "What is a Region?",
    correct_answer:
      "A region is a geographical area on the planet that contains at least one data center",
    incorrect_answers: [
      "A region is a geographical area on the planet that contains at least one database",
      "A region is a geographical area on the planet that contains a bandwidth connection",
      "A region is a geographical area on the planet that contains at least one host",
    ],
    options: [
      "A region is a geographical area on the planet that contains at least one database",
      "A region is a geographical area on the planet that contains a bandwidth connection",
      "A region is a geographical area on the planet that contains at least one host",
      "A region is a geographical area on the planet that contains at least one data center",
    ],
  },
];

export default architectureAndServicesQestions;
