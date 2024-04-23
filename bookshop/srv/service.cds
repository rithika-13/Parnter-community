using  from '@sap/cds/common';

service community {
  entity ques  {
    key ID:Integer;
    title: String;
  }
  
}


annotate community.ques with @OData.publish;

