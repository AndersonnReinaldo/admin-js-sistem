import Task from '../models/task';

export default {
    resource: Task,
    options:{
        parent:{
            icon:"Task"
        },
        properties: {
            id:{
                position:1
            },
            title:{
                position:2,
                isRequired:true
            },
            description:{
                position:3,
                isVisible: {list: false, filter: false, show:true, edit:true},
                type:"richtext",
                props:{
                    quill:{
                        modules:{
                            toolbar:[
                                ["bold", "italic"],
                                ["link", "image"],
                            ],
                        }
                    }
                }
            },
            due_date:{
                position: 4,
            },
            effort:{
                position:5
            },
            order:{
                position:6
            },
            status:{
                position:7,
                isRequired:true,
                availableValues:[
                    {value:"backlog", label:"Backlog"},
                    {value:"doing", label:"Em Execucao"},
                    {value:"done", label:"Pronto"},
                    {value:"approved", label:"Aprovado"},
                    {value:"rejected", label:"Rejeitado"},
                ]
             },
            projectId:{
                position: 8,
                isRequired:true,
                isVisible:{ list:false, filter:true, show:true, edit:true}
            },
            user_id:{
                position: 9,
                isRequired:true,
            },
            createdAt:{
                position: 10,
                isVisible:{ list:true, filter:true, show:true, edit:false}
            },
            updatedAt:{
                position: 11,
                isVisible:{ list:true, filter:true, show:true, edit:false}
            },
            user_id:{
                isVisible:false
            },
            project_id:{
                isVisible:false
            },
        }
    }
}