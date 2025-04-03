import { Topic } from './types';

export const topics: Topic[] = [
  {
    id: 'network-fundamentals',
    title: 'Network Fundamentals',
    description: 'Learn the basic concepts and principles of computer networking',
    progress: 0,
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000',
    subtopics: [
      {
        id: 'what-is-networking',
        title: 'What is Networking?',
        content: 'Computer networking is the practice of connecting computers and devices to share resources and communicate. Networks form the backbone of modern digital infrastructure, enabling everything from internet connectivity to business operations.',
        completed: false,
        keyPoints: [
          'Definition of computer networks',
          'Types of networks: LAN, WAN, MAN',
          'Network components and topology',
          'Basic network architecture',
          'Network protocols and standards'
        ],
        resources: [
          'https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-computer-networking.html',
          'https://www.ibm.com/topics/networking'
        ]
      },
      {
        id: 'network-models',
        title: 'Network Models',
        content: 'Understanding OSI and TCP/IP models that standardize network communications. These models provide a framework for understanding how different networking protocols and technologies work together.',
        completed: false,
        keyPoints: [
          'OSI Model seven layers and their functions',
          'TCP/IP Model four layers',
          'Protocol stack implementation',
          'Data encapsulation process',
          'Common protocols at each layer'
        ],
        resources: [
          'https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/',
          'https://www.geeksforgeeks.org/tcp-ip-model/'
        ]
      }
    ]
  },
  {
    id: 'network-devices',
    title: 'Network Devices',
    description: 'Explore various networking devices and their roles',
    progress: 0,
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000',
    subtopics: [
      {
        id: 'routers',
        title: 'Routers and Routing',
        content: 'Routers are networking devices that forward data packets between computer networks. They operate at Layer 3 (Network Layer) of the OSI model and use routing protocols to determine the best path for data transmission.',
        completed: false,
        keyPoints: [
          'Router functions and components',
          'Routing protocols (OSPF, BGP, EIGRP)',
          'Network address translation (NAT)',
          'Router configuration basics',
          'Static vs Dynamic routing'
        ],
        resources: [
          'https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-routing.html',
          'https://www.juniper.net/documentation/us/en/software/junos/routing-overview/'
        ]
      },
      {
        id: 'switches',
        title: 'Switches and Switching',
        content: 'Switches connect devices within a network and use MAC addresses to forward data. They operate at Layer 2 (Data Link Layer) and are crucial for creating efficient local area networks.',
        completed: false,
        keyPoints: [
          'Switch operation principles',
          'VLANs and trunking',
          'Port security features',
          'Spanning Tree Protocol (STP)',
          'Layer 2 vs Layer 3 switching'
        ],
        resources: [
          'https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/network-switching-basics.html'
        ]
      },
      {
        id: 'network-controllers',
        title: 'Network Controllers and Management',
        content: 'Network controllers (NCM, NPM, NAM) are essential tools for managing and monitoring network infrastructure. They provide centralized management, monitoring, and configuration capabilities.',
        completed: false,
        keyPoints: [
          'Network Configuration Management (NCM)',
          'Network Performance Monitoring (NPM)',
          'Network Application Monitoring (NAM)',
          'Controller-based architectures',
          'Software-Defined Networking (SDN)'
        ],
        resources: [
          'https://www.solarwinds.com/network-configuration-manager',
          'https://www.cisco.com/c/en/us/products/cloud-systems-management/'
        ]
      }
    ]
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description: 'Understanding different types of network infrastructures',
    progress: 0,
    imageUrl: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=2000',
    subtopics: [
      {
        id: 'access-points',
        title: 'Wireless Access Points',
        content: 'Access points enable wireless connectivity in networks, providing Wi-Fi access to devices. They are crucial components in modern network infrastructure.',
        completed: false,
        keyPoints: [
          'Wi-Fi standards and protocols',
          'Access point placement and coverage',
          'Security considerations',
          'Controller vs Standalone APs',
          'Power over Ethernet (PoE)'
        ],
        resources: [
          'https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-a-wireless-access-point.html'
        ]
      },
      {
        id: 'gateways',
        title: 'Network Gateways',
        content: 'Gateways serve as entry and exit points between different networks, often translating between different network protocols and architectures.',
        completed: false,
        keyPoints: [
          'Types of gateways',
          'Protocol conversion',
          'Security gateway functions',
          'Application layer gateways',
          'IoT gateways'
        ],
        resources: [
          'https://www.cloudflare.com/learning/network-layer/what-is-a-gateway/'
        ]
      },
      {
        id: 'lan',
        title: 'Local Area Network (LAN)',
        content: 'A LAN connects computers and devices in a limited geographical area, typically within a single building or campus.',
        completed: false,
        keyPoints: [
          'LAN topologies and design',
          'Ethernet standards and speeds',
          'Network addressing schemes',
          'Performance optimization',
          'Troubleshooting methods'
        ],
        resources: [
          'https://www.ibm.com/topics/local-area-network',
          'https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-a-lan-local-area-network.html'
        ]
      }
    ]
  }
];