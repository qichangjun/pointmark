
export class Params {
    id? : string;
  }
  
export  class BaseInfo {
    dutyDept? : any;
    evalutionMethod? : string;
    id? : string;
    name? : string;
    nodeName? : string;
    proveFileName? : string;
    rate? : string;
    ratingDetails? : string;
    requirements? : string;
    time? : string;
    worksResolve? : string;
    nodeType? : string;
  }
  
export  class QuestionList {
    id? : string;
    questionDes? : string;
    questionStatus? : string;
    quotaId? : string;
  }
  
export class NewQuestion {
    questionDes : string;
    questionStatus : number;
  }
  
export  class SourceList {
    description? : string;
    id? : string;
    quotaId? : string;
    score? : string;
    time? : string;
  }
  
export  class NewSource {
    description? : string;
    score? : any;
  }
  
export  class FileList {
    fileName? : string;
    id? : string;
    quotaId? : string;
    time? : string;
  }