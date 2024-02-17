import React from 'react';

const IconComponent = ({opacity}) => {
  return (
    <img style={{width:"20px",opacity:opacity==true?"50%":"100%"}}
    src='https://s3-alpha-sig.figma.com/img/c58f/6f53/60a247f9bdfe6f74754d2492a754ddff?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X7dqGpH2NIA9p50yIO0ldp~2D7VsxQx6FRunmf5amBDkvKaqGvXSj5guD8sCD8XpKxMqy1hot9eBU8luOr2WeE8lSB-OE9wrnqdFnxMrLCzO3BZsiFbdumyQZanegdzgbZJQNmKx5ajj271Qvw7RRJbqwah6sA-gAS9PzbPR5S8BjfiIseU~Lphdd-3Z0jVbIzsYLDoS7HloR5DWq8ghFNVNMXH3CMcB6kITiAxJbtocQiwDGs~KnUADifCoDrKc9fIyXRXcllD5UMlbzrcjAxYyti61Ii0to47t7fogbpCpMFsBAWJXrMigtXYmMI314d6ZkDQeif6JFTLC-EMPrw__' />
  );
};

export default IconComponent;
