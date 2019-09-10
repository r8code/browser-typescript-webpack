declare module "*.svg" {
    const content: any;
    export default content;
  }

  declare module "worker-loader!*" {
    class WebpackWorker extends Worker {
      constructor();
    }
  
    export default WebpackWorker;
  }