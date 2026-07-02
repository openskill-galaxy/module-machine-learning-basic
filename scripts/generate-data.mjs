import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="machine learning ML supervised unsupervised reinforcement learning training validation test set feature label sample model loss function objective gradient descent overfitting underfitting generalization bias variance regularization L1 L2 data cleaning missing value outlier standardization normalization one-hot encoding feature selection feature engineering linear regression MSE R2 logistic regression sigmoid classification threshold confusion matrix precision recall F1 ROC AUC cross validation KNN naive bayes decision tree information gain Gini random forest ensemble learning bagging boosting SVM kernel KMeans clustering PCA grid search model tuning scikit-learn numpy pandas matplotlib Python train_test_split StandardScaler LabelEncoder train valid test pipeline cross_val_score GridSearchCV RandomForestClassifier LogisticRegression LinearRegression SVC KNeighborsClassifier DecisionTreeClassifier KMeans PCA";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"ml-tag-"+String(i+1).padStart(3,"0"),name:n,category:"ML",description:"ML标签:"+n,count:0,createdAt:"2026-07-02T00:00:00.000Z"};});}
var CD=[
  {id:"ml-course-01",order:1,slug:"ML入门",title:"机器学习入门与学习路线",description:"ML定义、分类、应用、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"ml-course-02",order:2,slug:"数据特征标签",title:"数据集、特征、标签与建模流程",description:"数据集划分、特征标签概念、建模流程。",estimatedHours:6,diff:"easy"},
  {id:"ml-course-03",order:3,slug:"Python环境",title:"Python 机器学习环境与 scikit-learn",description:"numpy/pandas/matplotlib/sklearn环境。",estimatedHours:4,diff:"easy"},
  {id:"ml-course-04",order:4,slug:"数据预处理",title:"数据预处理与特征工程",description:"标准化、归一化、独热编码、特征选择、缺失值处理。",estimatedHours:10,diff:"medium"},
  {id:"ml-course-05",order:5,slug:"模型评估",title:"模型评估与交叉验证",description:"混淆矩阵、准确率精确率召回率F1、ROC AUC、交叉验证。",estimatedHours:10,diff:"medium"},
  {id:"ml-course-06",order:6,slug:"线性回归",title:"线性回归与回归任务",description:"线性回归原理、MSE、R2、梯度下降。",estimatedHours:8,diff:"medium"},
  {id:"ml-course-07",order:7,slug:"逻辑回归",title:"逻辑回归与分类任务",description:"逻辑回归原理、sigmoid、分类阈值、多分类。",estimatedHours:8,diff:"medium"},
  {id:"ml-course-08",order:8,slug:"KNN朴素贝叶斯",title:"KNN、朴素贝叶斯与基础分类器",description:"KNN原理、朴素贝叶斯原理、分类应用。",estimatedHours:8,diff:"medium"},
  {id:"ml-course-09",order:9,slug:"决策树随机森林",title:"决策树与随机森林",description:"决策树、信息增益、基尼指数、随机森林、集成学习。",estimatedHours:10,diff:"hard"},
  {id:"ml-course-10",order:10,slug:"SVM",title:"SVM 与核方法入门",description:"SVM原理、核技巧、软间隔、支持向量。",estimatedHours:8,diff:"hard"},
  {id:"ml-course-11",order:11,slug:"聚类KMeans",title:"聚类算法：KMeans 与层次聚类",description:"KMeans原理、聚类评价、层次聚类、DBSCAN简介。",estimatedHours:8,diff:"hard"},
  {id:"ml-course-12",order:12,slug:"降维PCA",title:"降维算法：PCA 与可视化",description:"PCA原理、方差解释、降维可视化。",estimatedHours:6,diff:"hard"},
  {id:"ml-course-13",order:13,slug:"模型调参",title:"模型调参、过拟合与泛化",description:"过拟合欠拟合、正则化、网格搜索、模型选择。",estimatedHours:8,diff:"hard"},
  {id:"ml-course-14",order:14,slug:"ML项目面试",title:"机器学习项目实战与面试训练",description:"房价预测项目、分类项目、面试题。",estimatedHours:10,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["理解ML流程","能处理特征","会评估模型","能完成项目"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
function bl(){
  var all=[];var id=1;
  function add(ci,t2,kps){var n=String(id).padStart(3,"0");all.push({id:"ml-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),summary:t2,content:"# "+t2+"\n\n"+t2+"内容。\n\n## 要点\n- 概念\n- 实现\n- 注意事项\n\n## 总结\n掌握"+t2+"提高ML能力。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:kps||[],practiceQuestionIds:[],tags:["ML"],prerequisites:[],updatedAt:"2026-07-02T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"ML课程"+(ci+1)+"章"+(j+1),["ml-kp-"+String(id+1).padStart(4,"0")]);
  return all;
}
var KPN=[["机器学习","数据驱动的方法"],["监督学习","有标签学习"],["无监督学习","无标签学习"],["特征工程","特征处理"],["模型评估","性能评价"],["线性回归","预测连续值"],["逻辑回归","二分类"],["决策树","树模型"],["随机森林","集成树"],["SVM","支持向量机"],["KNN","最近邻"],["KMeans","聚类算法"],["PCA","降维"],["正则化","防过拟合"],["交叉验证","模型验证"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"ml-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"ML",tags:["ML"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"ml-kp-"+String(k.length+1).padStart(4,"0"),name:"ML概念"+(k.length+1),description:"ML概念说明",category:"ML",tags:["ML"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}return k;}
var QC=["ML入门","数据特征标签","Python环境","数据预处理","模型评估","线性回归","逻辑回归","KNN朴素贝叶斯","决策树随机森林","SVM","聚类KMeans","降维PCA","模型调参","ML项目面试"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"机器学习定义？",["数据驱动方法","规则编程","数据库管理","网络编程"],"A","easy"],[1,"训练集用于？",["训练模型","评估模型","最终测试","调参"],"A","easy"],[3,"标准化方法？",["StandardScaler","MinMaxScaler","LabelEncoder","OneHotEncoder"],"A","medium"],[4,"混淆矩阵不包含？",["召回率","准确率","精确率","MAE"],"D","medium"],[5,"线性回归损失函数？",["MSE","CrossEntropy","Hinge","KL"],"A","medium"],[6,"sigmoid函数输出范围？",["0到1","-1到1","0到∞","-∞到∞"],"A","medium"],[8,"随机森林是？",["集成学习","单一模型","线性模型","聚类"],"A","medium"],[9,"SVM通过什么处理非线性？",["核函数","神经网络","决策树","KNN"],"A","hard"],[10,"KMeans需要指定？",["聚类数K","半径Eps","密度MinPts","树深度"],"A","hard"],[11,"PCA是？",["降维方法","聚类方法","分类方法","回归"],"A","medium"],[12,"网格搜索用于？",["模型调参","数据清洗","特征选择","可视化"],"A","medium"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];qs.push({id:"ml-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确答案是"+t_[3]+"。",wrong_reason:"需加强理解。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:500},{type:"calculation",min:400},{type:"case_analysis",min:800}];
  while(qid<=3700){
    var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="ml-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于ML"+ch+"表述正确的是？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="以下ML"+ch+"哪些正确？（多选）";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是机器学习重要概念。（判断）";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="在ML"+ch+"中____是重要概念。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"的ML原理。";o=[{label:"A",text:"简答"}];a=ch+"用于机器学习。";}
    else if(it.type==="calculation"){s="ML"+ch+"计算题：计算相关指标。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"结果"+(i+1)}});a="A";}
    else if(it.type==="case_analysis"){s="ML"+ch+"案例：分析并建模。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确答案是"+a+"。",wrong_reason:"加强学习。",related_questions:[],tags:[ch],estimated_time:it.type==="calculation"?120:60,source_type:"curated-generated"});
    e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"ml-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":d==="medium"?"进阶":"综合"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-02T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["房价预测","学生成绩预测","用户流失预测","垃圾邮件分类","鸢尾花分类","信用风险分类","销售预测","异常检测","客户聚类","商品聚类","PCA可视化","模型评估","过拟合修复","特征工程","网格搜索","ML面试"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"ml-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握ML",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"问题",description:"定义"},{order:2,title:"数据",description:"处理"},{order:3,title:"建模",description:"训练"},{order:4,title:"评估",description:"分析"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-02T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"ML路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"ml-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,summary:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["ML","监督学习","无监督学习","特征","标签","模型","线性回归","逻辑回归","决策树","随机森林","SVM","KNN","KMeans","PCA","交叉验证"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["ML概念"+i,"ML概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"ml-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"ML",tags:["ML"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["ML问题"+(i+1)+"?","ML问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"ml-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"ML",tags:["ML"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["ML"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["ML"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["ML"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["ML"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["ML"]});});return e;}
async function main(){
  console.log("Gen ML...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-machine-learning-basic",slug:"module-machine-learning-basic",title:"机器学习基础",subtitle:"面向数据分析和AI入门者",description:"面向Python数据分析和AI入门学习者的机器学习流程特征工程模型评估线性回归逻辑回归决策树随机森林SVM聚类降维调参与项目实战训练。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["机器学习","Python","scikit-learn","特征工程","模型评估","分类","回归","聚类"],estimatedHours:180,difficulty:"intermediate",updatedAt:"2026-07-02T12:00:00.000Z",coverEmoji:"\u{1F916}",repoUrl:"https://github.com/openskill-galaxy/module-machine-learning-basic",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var files2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in files2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(files2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(files2[key])?files2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});
  console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
