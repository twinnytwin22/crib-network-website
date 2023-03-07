export interface Item {
    title: string;
    subtitle: string;
    imageUrl1: string;
    imageUrl2: string;
    url: string;
    gitUrl: string;
    buttonText: string;
    description: string;
  }
  
  export const items: Item[] = [
    {
      title: "Web3 Creator Manager",
      subtitle: "",
      imageUrl1: "/manager-screen-desktop.png",
      imageUrl2: '/manager-screen-mobile.png',
      url: "http://thecrib.space",
      gitUrl: '',
      buttonText: 'View Example',
      description: 'Web3 Creator Manager serves as a portfolio, commerce, and engagement manager for creators, providing discoverability to previous content that would often get lost with new releases.'
    },
    {
      title: "Subport",
      subtitle: "Coming soon",
      imageUrl1: "/subport-desktop.png",
      imageUrl2: "/subport-mobile.png", 
      url: "http://subport.xyz",
      gitUrl: '',
      buttonText: "View Website",
      description: "Fans earn digital collectibles for supporting their favorite artists on their favorite online platform."

    },
  ];