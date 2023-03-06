export interface Item {
    title: string;
    imageUrl1: string;
    imageUrl2: string;
    url: string;
    gitUrl: string;
    buttonText: string;
    description: string;
  }
  
  export const items: Item[] = [
    {
      title: "NFT Creator Portfolio ",
      imageUrl1: "/manager-screen-desktop.png",
      imageUrl2: '/manager-screen-mobile.png',
      url: "http://thecrib.space",
      gitUrl: '',
      buttonText: 'View Example',
      description: ''
    },
    {
      title: "Subport",
      imageUrl1: "/subport-desktop.png",
      imageUrl2: "/subport-mobile.png", 
      url: "http://subport.xyz",
      gitUrl: '',
      buttonText: "View Website",
      description: ""

    },
  ];