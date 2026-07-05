import {put, del} from '@vercel/blob';
import {BadRequestError} from '../../exception/BadRequestError';
import {v4 as uuidv4} from 'uuid';
import {Readable} from 'node:stream';

export class ImageService {
  private readonly BLOB_READ_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

  async upload(diretory: string, file: Express.Multer.File, customFilename?: string) {
    if (!file) {
      throw new BadRequestError('Nenhum arquivo foi enviado');
    }

    const stream = Readable.from(file.buffer);
    const extension = file.originalname.split('.').pop();
    const filename = customFilename ? `${customFilename}.${extension}` : `${uuidv4()}.${extension}`;

    const blob = await put(`${diretory}/${filename}`, stream, {
      access: 'public',
      token: this.BLOB_READ_WRITE_TOKEN
    });

    return blob;
  }

  async deleteBlob(pathname: string) {
    await del(pathname, {
      token: this.BLOB_READ_WRITE_TOKEN
    });
  }

  extractPath(url: string): string {
    const parsed = new URL(url);
    return parsed.pathname.slice(1);
  }
}
