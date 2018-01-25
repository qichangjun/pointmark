import { Injectable } from '@angular/core';

@Injectable()
export class ApiUrlService {

  login = '/user/login';
  quotaInfo = '/quota/detail';
  getQuestionList = '/question/list';
  deleteQuestion = '/question/delete';
  addQuestion = '/question/save';
  updateQuestion = '/question/update';

  getSorceRecordList = '/scoreRecord/list';
  deleteSource = '/scoreRecord/delete';
  addSource = '/scoreRecord/save';

  getFileList = '/file/list';
  deleteFile = '/file/delete';
  upload = '/file/save';

  scoreReduceDetailList = '/quota/scoreReduceDetail/list';

  getTreeInfo = '/quota/treeList';
  register = '/user/register';
  download = '/file/download';
  resetPassword = '/user/resetPassword';
  updateMission = '/quota/update';

  addNode = '/quota/save'
}
