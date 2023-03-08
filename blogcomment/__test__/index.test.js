const app = require('../app')
const request= require('supertest')

it('returns not a 201 on successful post',
async ()=>{
 return request(app)
        .post('/api/v1/blog/post/:postId/comment')
        .send({
            title:"hello post"
        }).expect(!201);
 });
 it('returns a 200 on successful event',
 async ()=>{
  return request(app)
         .post('/eventbus/event/listener')
         .send({
             type:"Comment Created"
         }).expect(200);
  });