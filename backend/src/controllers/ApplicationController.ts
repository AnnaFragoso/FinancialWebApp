import { Request, Response } from "express";

class ApplicationController{

  public home(req:Request, res:Response) {
    return res.json({
      response: "Welcome :)"
    });
  }
}

export const applicationController = new  ApplicationController();