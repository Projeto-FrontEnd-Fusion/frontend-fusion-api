import type { Request, Response } from 'express';

import { CreateProjectService } from '@/services/user/projects';
import HttpStatusCode from '@/utils/statusCode';

export async function CreateProjectController(
  req: Request,
  res: Response
): Promise<void> {
  const { url, title } = req.body;

  if (!url && !title) {
    res.send({
      data: null,
      message: 'Missing information',
      statusCode: HttpStatusCode.NOT_ACCEPTABLE,
    });
  }

  const created = await CreateProjectService(req.body);

  if (created) {
    res.send({
      data: null,
      message: 'Successfully created Project',
      statusCode: HttpStatusCode.CREATED,
    });

    return;
  }

  res.send({
    data: null,
    message: 'Unknow Error',
    statusCode: HttpStatusCode.NOT_ACCEPTABLE,
  });

  return;
}
