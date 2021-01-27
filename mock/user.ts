import { Request, Response } from 'express';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': {
    status: 1,
    name: '莎士比亚',
    icon: 'https://tva1.sinaimg.cn/large/00831rSTly1gdm7eok2oij301s01sgli.jpg',
    userid: null, // '001',
  },
  'POST /api/login': (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (password == 'ys123456' && username == 'admin') {
      res.send({
        status: 200,
        username: 'admin',
        icon:
          'https://tva1.sinaimg.cn/large/00831rSTly1gdm7eok2oij301s01sgli.jpg',
        userid: '001',
      });
    } else {
      res.send({
        status: 0,
        msg: '账号或者密码错误！666666',
      });
    }
  },
};
