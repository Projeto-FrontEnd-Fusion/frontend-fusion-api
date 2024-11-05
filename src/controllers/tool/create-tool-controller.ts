import { CreateToolService } from '@/services/tools';
import HttpStatusCode from '@/utils/statusCode';
import type { Request, Response } from 'express';

export async function CreateToolController(req: Request, res: Response) {
  const createdTool = await CreateToolService(req.body);

  if (createdTool.isLeft()) {
    res.send({
      data: null,
      message: createdTool.value.message,
      statusCode: HttpStatusCode.BAD_REQUEST,
    });

    return;
  }

  res.send({
    data: null,
    message: 'Successfully created Tool',
    statusCode: HttpStatusCode.CREATED,
  });
}
