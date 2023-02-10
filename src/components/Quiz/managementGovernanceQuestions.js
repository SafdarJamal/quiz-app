const managementAndGovernanceQuestions = [
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "How does resource type affect costs in Azure",
    correct_answer: "Costs are specific to each resource",
    incorrect_answers: [
      "Costs are the same regardless of resource",
      "Costs are the same because of the metered approach",
    ],
    options: [
      "Costs are the same regardless of resource",
      "Costs are the same because of the metered approach",
      "Costs are specific to each resource",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "What factors impact costs in Azure?",
    correct_answer: "All of the above",
    incorrect_answers: [
      "Resource type",
      "Consumption",
      "Maintenance",
      "Geography",
      "Networking",
    ],
    options: [
      "Resource type",
      "Consumption",
      "Maintenance",
      "Geography",
      "Networking",
      "All of the above",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "How does maintenance affect costs in Azure",
    correct_answer: "Failure to deprovision associated resources",
    incorrect_answers: [
      "Network traffic",
      "Failure to select appropriate datacenter",
    ],
    options: [
      "Network traffic",
      "Failure to select appropriate datacenter",
      "Failure to deprovision associated resources",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "What is the Azure Pricing Calculator?",
    correct_answer:
      "The pricing calculator gives an estimated cost for provisioned resources in Azure",
    incorrect_answers: [
      "The pricing calculator gives an estimated cost of running an on-premise infrastructure",
      "The pricing calculator gives an estimated 'Life-and-shift' migration cost",
    ],
    options: [
      "The pricing calculator gives an estimated cost of running an on-premise infrastructure",
      "The pricing calculator gives an estimated 'Life-and-shift' migration cost",
      "The pricing calculator gives an estimated cost for provisioned resources in Azure",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "The TCO calculator is designed to compare the costs of running an on-premise infrastructure compared to an Azure Cloud infrastructure",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "Describe the Azure Cost Management and Billing Tool",
    correct_answer: "All of the above",
    incorrect_answers: [
      "Provides cost analysis",
      "Provides cost alerts",
      "Enables the ability to create budgets",
    ],
    options: [
      "Provides cost analysis",
      "Provides cost alerts",
      "Enables the ability to create budgets",
      "All of the above",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "Within Cost management, what is Cost analysis?",
    correct_answer:
      "Cost analysis provides a visual for Azure costs including billing cycles, region, and resources",
    incorrect_answers: [
      "Cost analysis provides a visual for Azure compute power",
      "Cost analysis provides a visual for B2B relations",
      "Cost analysis is not a component of the Cost Management Tool",
    ],
    options: [
      "Cost analysis provides a visual for Azure compute power",
      "Cost analysis provides a visual for B2B relations",
      "Cost analysis is not a component of the Cost Management Tool",
      "Cost analysis provides a visual for Azure costs including billing cycles, region, and resources",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "Cost Management and Billing Tool - Select the option with correct number of cost alerts",
    correct_answer: "Budget, Credit, and Department spending",
    incorrect_answers: [
      "Budget, Credit, and Team spending",
      "Budget and Department spending",
      "Credit and Department spending",
    ],
    options: [
      "Budget, Credit, and Team spending",
      "Budget and Department spending",
      "Credit and Department spending",
      "Budget, Credit, and Department spending",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "What Azure feature can help stay organized and track usage based on metadata associated with resources?",
    correct_answer: "Tags",
    incorrect_answers: ["Tracers", "Values"],
    options: ["Tracers", "Values", "Tags"],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "What’s the best method to estimate the cost of migrating to the cloud while incurring minimal costs?",
    correct_answer:
      "Use the Total Cost of Ownership calculator to estimate expected costs.",
    incorrect_answers: [
      "Migrate a small sample to the cloud and track costs over time.",
      "Migrate to the cloud, but track usage closely using tags to rapidly understand costs.",
    ],
    options: [
      "Migrate a small sample to the cloud and track costs over time.",
      "Migrate to the cloud, but track usage closely using tags to rapidly understand costs.",
      "Use the Total Cost of Ownership calculator to estimate expected costs.",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "Azure Policy is a service that enables you to create, assign, and manage policies that control or audit your resources",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "Blueprint definitions are also known as keys",
    correct_answer: "False",
    incorrect_answers: ["True"],
    options: ["True", "False"],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "Tags ba be used for...",
    correct_answer: "all of the above",
    incorrect_answers: [
      "resource management",
      "cost management optimization",
      "operation management",
      "security",
      "governance and regulatory compliance",
      "workload optimization and automation",
    ],
    options: [
      "resource management",
      "cost management optimization",
      "operation management",
      "security",
      "governance and regulatory compliance",
      "workload optimization and automation",
      "all of the above",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "Azure Blueprints lets you standardize cloud subscription or environment deployments",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "Artifacts can include",
    correct_answer: "role and policy assignments",
    incorrect_answers: [
      "teams and supervisors",
      "groups and governance",
      "policy and groups",
    ],
    options: [
      "teams and supervisors",
      "groups and governance",
      "policy and groups",
      "role and policy assignments",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "Azure Policy enables you to define both individual policies and groups of related policies",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },

  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "Fille in the blank - Azure Policies are inherited ____",
    correct_answer:
      "therefore a policy at a high level, it will automatically be applied to all of the groupings that fall within the parent",
    incorrect_answers: [
      "therefore a policy at a high level, must be manually be applied to all of the groupings that fall within the parent",
      "therefore a policy at a high level, it will automatically be applied to the service",
    ],
    options: [
      "therefore a policy at a high level, must be manually be applied to all of the groupings that fall within the parent",
      "therefore a policy at a high level, it will automatically be applied to the service",
      "therefore a policy at a high level, it will automatically be applied to all of the groupings that fall within the parent",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "What is the purpose of a Resource Lock?",
    correct_answer:
      "Prevent the accidental deletion or editting of critical resources",
    incorrect_answers: [
      "Ensure keys are required to access resources",
      "Ensure resources cannot be accessed",
    ],
    options: [
      "Ensure keys are required to access resources",
      "Ensure resources cannot be accessed",
      "Prevent the accidental deletion or editting of critical resources",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "There are two types of Resource Locks",
    correct_answer: "Delete and ReadOnly",
    incorrect_answers: [
      "Modify and Delete",
      "Read and Write",
      "ReadOnly and Modify",
    ],
    options: [
      "Modify and Delete",
      "Read and Write",
      "ReadOnly and Modify",
      "Delete and ReadOnly",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "How many parameters does an Azure Blueprint Artifact need to be valid?",
    correct_answer: "0",
    incorrect_answers: ["1", "2", "3"],
    options: ["1", "2", "3", "0"],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "How can you prevent non-compliant resources from being created, without having to manually evaluate each resource as it’s created?",
    correct_answer: "Azure Policy",
    incorrect_answers: ["Azure Blueprints", "Azure Resource Monitor"],
    options: ["Azure Blueprints", "Azure Resource Monitor", "Azure Policy"],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "In the Service Trust Portal you can access",
    correct_answer: "All of the above",
    incorrect_answers: [
      "Compliance Tools: compliance score, audit reports, and data protection",
      "Compliance Manager",
      "Trust Documents",
      "Industries and Regions",
      "Trust Center",
    ],
    options: [
      "Compliance Tools: compliance score, audit reports, and data protection",
      "Compliance Manager",
      "Trust Documents",
      "Industries and Regions",
      "Trust Center",
      "All of the above",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "What is Azure Portal?",
    correct_answer: "Web-based CLI alternative",
    incorrect_answers: [
      "Azure command line interface",
      "Local resource management",
      "Azure PowerShell",
    ],
    options: [
      "Azure command line interface",
      "Local resource management",
      "Azure PowerShell",
      "Web-based CLI alternative",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "Azure CLI uses PowerShell Commands",
    correct_answer: "False",
    incorrect_answers: ["True"],
    options: ["True", "False"],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "Through the Azure Portal GUI you can...",
    correct_answer: "All of the above",
    incorrect_answers: [
      "Build, manage, and monitor everything from simple web apps to complex cloud deployments",
      "Create custom dashboards for an organized view of resources",
      "Configure accessibility options for an optimal experience",
    ],
    options: [
      "Build, manage, and monitor everything from simple web apps to complex cloud deployments",
      "Create custom dashboards for an organized view of resources",
      "Configure accessibility options for an optimal experience",
      "All of the above",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "Azure Cloud Shell is a browser-based shell tool that allows you to create, configure, and manage Azure resources using a shell. Azure Cloud Shell support both Azure PowerShell and the Azure Command Line Interface (CLI), which is a Bash shell.",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "Azure PowerShell uses Bash commands",
    correct_answer: "False",
    incorrect_answers: ["True"],
    options: ["True", "False"],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "What does Azure Arc do?",
    correct_answer:
      "Through ARM enables the ability to extend compliance and monitoring to hybrid and multi-cloud configurations",
    incorrect_answers: [
      "Through ARM enables the ability to extend compliance and monitoring to public and private configurations",
      "Through ARM enables the ability to extend compliance and monitoring to community and government configurations",
    ],
    options: [
      "Through ARM enables the ability to extend compliance and monitoring to public and private configurations",
      "Through ARM enables the ability to extend compliance and monitoring to community and government configurations",
      "Through ARM enables the ability to extend compliance and monitoring to hybrid and multi-cloud configurations",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "What resource types does Azure Arc allow you to manage out of Azure?",
    correct_answer: "All of the above",
    incorrect_answers: [
      "Servers",
      "AWS",
      "Kubernetes clusters",
      "Azure data services",
      "SQL Server",
      "Google Cloud",
    ],
    options: [
      "Servers",
      "AWS",
      "Kubernetes clusters",
      "Azure data services",
      "SQL Server",
      "Google Cloud",
      "All of the above",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "What is the Azure Resource Manager (ARM)?",
    correct_answer: "The deployment and management service for Azure",
    incorrect_answers: [
      "Web-based portal for Azure",
      "Hosts resource templates for Azure",
    ],
    options: [
      "Web-based portal for Azure",
      "Hosts resource templates for Azure",
      "The deployment and management service for Azure",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "What is the purpose of Azure Resource Management Tools?",
    correct_answer:
      "Provides a management layer that enables you to create, update, and delete resources in your Azure account",
    incorrect_answers: [
      "Provides a command line interface that enables you to create, update, and delete resources in your Azure account",
      "Provides a application insights that enables you to create, update, and delete resources in your Azure account",
    ],
    options: [
      "Provides a management layer that enables you to create, update, and delete resources in your Azure account",
      "Provides a command line interface that enables you to create, update, and delete resources in your Azure account",
      "Provides a application insights that enables you to create, update, and delete resources in your Azure account",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "What are some of the advantages of ARM?",
    correct_answer: "All of the above",
    incorrect_answers: [
      "Manage infrastructure through declarative templates",
      "Deploy, manage, and monitor all resources for your solution as a group",
      "Re-deploy your solution throughout the development life-cycle",
      "Apply access control al all services via RBAC",
    ],
    options: [
      "Manage infrastructure through declarative templates",
      "Deploy, manage, and monitor all resources for your solution as a group",
      "Re-deploy your solution throughout the development life-cycle",
      "Apply access control al all services via RBAC",
      "All of the above",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "What service helps you manage your Azure, on-premises, and multi-cloud environments?",
    correct_answer: "Azure Arc",
    incorrect_answers: ["Azure Cloud Manager", "Azure Policy"],
    options: ["Azure Cloud Manager", "Azure Policy", "Azure Arc"],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "What two components could you use to implement a “infrastructure as code” deployment?",
    correct_answer: "Azure Blueprints and ARM Templates",
    incorrect_answers: [
      "Azure Policy and Azure Arc",
      "Azure Monitor and Azure Arc",
    ],
    options: [
      "Azure Policy and Azure Arc",
      "Azure Monitor and Azure Arc",
      "Azure Blueprints and ARM Templates",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "What are some benefits of ARM Templates",
    correct_answer: "All of the above",
    incorrect_answers: [
      "Declarative syntax",
      "Repeatable results",
      "Orchestration",
      "Modular files",
      "Extensibility",
    ],
    options: [
      "Declarative syntax",
      "Repeatable results",
      "Orchestration",
      "Modular files",
      "Extensibility",
      "All of the above",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "What is Azure Advisor?",
    correct_answer:
      "Azure Advisor is a resource optimization tool that makes recommendations to improve reliability, security, and performance, achieve operational excellence, and reduce costs",
    incorrect_answers: [
      "Azure Advisor is 24/7 resource support",
      "Azure Advisor is offered to premium clients to enhance the the reliability, security and performance of their Azure cloud resources",
    ],
    options: [
      "Azure Advisor is 24/7 resource support",
      "Azure Advisor is a resource optimization tool that makes recommendations to improve reliability, security, and performance, achieve operational excellence, and reduce costs",
      "Azure Advisor is offered to premium clients to enhance the the reliability, security and performance of their Azure cloud resources",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "Azure Service Health is the comination of what three Azure services?",
    correct_answer: "Azure Status, Service Health, and Resource Health",
    incorrect_answers: [
      "Azure Global, Service Health, Resource Health",
      "Azure Status, Resource Health, Azure CLI",
      "Azure Global, Resource Health, Azure Cloud Manager",
    ],
    options: [
      "Azure Global, Service Health, Resource Health",
      "Azure Status, Resource Health, Azure CLI",
      "Azure Global, Resource Health, Azure Cloud Manager",
      "Azure Status, Service Health, and Resource Health",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "Azure Log Analytics is the tool in the Azure portal where you’ll write and run log queries on the data gathered by Azure Monitor.",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "What is Azure Status?",
    correct_answer:
      "Azure Status informs users of the status of Azure services globally",
    incorrect_answers: [
      "Azure Status informs users of their resources",
      "Azure Status informs users if their VM is down",
    ],
    options: [
      "Azure Status informs users of their resources",
      "Azure Status informs users if their VM is down",
      "Azure Status informs users of the status of Azure services globally",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "What is Azure Service Health",
    correct_answer: "Service Health focuses on regional service status",
    incorrect_answers: [
      "Service Health focuses on local service status",
      "Service Health focuses on global service status",
    ],
    options: [
      "Service Health focuses on local service status",
      "Service Health focuses on global service status",
      "Service Health focuses on regional service status",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "Azure Monitor Alerts are an automated way to stay informed when Azure Monitor detects a threshold being crossed. You set the alert conditions, the notification actions, and then Azure Monitor Alerts notifies when an alert is triggered.",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question: "What is Azure Resource Health?",
    correct_answer: "Resource Health is a tailored view of your Azure resource",
    incorrect_answers: [
      "Resource Health is a tailored view of your region",
      "Resource Health is a tailored view of your network",
      "Resource Health is tailored view of your global network",
    ],
    options: [
      "Resource Health is a tailored view of your region",
      "Resource Health is a tailored view of your network",
      "Resource Health is tailored view of your global network",
      "Resource Health is a tailored view of your Azure resource",
    ],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "Azure Monitor is a platform for collecting data on your resources, analyzing that data, visualizing the information, and even acting on the results. Azure Monitor can monitor Azure resources, your on-premises resources, and even multi-cloud resources like virtual machines hosted with a different cloud provider.",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "Which is not one of the recommendation categories for Azure Advisor?",
    correct_answer: "Capacity",
    incorrect_answers: ["Reliability", "Cost"],
    options: ["Reliability", "Cost", "Capacity"],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "You receive an email notification that virtual machines (VMs) in an Azure region where you have VMs deployed is experiencing an outage. Which component of Azure Service Health will let you know if your application is impacted?",
    correct_answer: "Resource Health",
    incorrect_answers: ["Azure Statis", "Service Health"],
    options: ["Resource Health", "Azure Statis", "Service Health"],
  },
  {
    category: 3, // Describe Azure Management and Governance
    type: "multiple",
    difficulty: "medium",
    question:
      "Application Insights, an Azure Monitor feature, monitors your web applications. Application Insights is capable of monitoring applications that are running in Azure, on-premises, or in a different cloud environment.",
    correct_answer: "True",
    incorrect_answers: ["False"],
    options: ["True", "False"],
  },
];

export default managementAndGovernanceQuestions;
