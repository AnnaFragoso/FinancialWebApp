import { Request, Response } from "express";
import { Service } from "../services/Service";

export class AuthController {

  public async getToken(req:Request, res:Response) {
    const token = await new Service().createWidget();

    return res.json({
      response: token
    });
  }

  public async linkRegister(req:Request, res:Response) {
    try {
      const { institution, username, password } = req.body;
      const token = await new Service().linkRegister(institution, username, password);

      return res.json({
        response: token
      });
    } catch(error) {
      return res.status(400).json("It was not possible to register")    
    }
  }
}

export const authController = new AuthController();