import "dotenv/config";
import "./database";

import AdminJS from "adminjs"
import AdminJSExpress from '@adminjs/express'
import AdminJSSequelize from '@adminjs/sequelize'
import express from 'express'
import locale from "./locales/locales";

import UserResource from './resources/UserResource';
import ProjectsResource from './resources/ProjectsResource ';
import TasksResource from './resources/TasksResource';

AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const adminJS = new AdminJS({
    databases:[],
    rootPath:'/admin',
    resources:[UserResource, ProjectsResource, TasksResource],
    ...locale
});

const router = AdminJSExpress.buildRouter(adminJS);

app.use(adminJS.options.rootPath, router);
app.listen(5000, () => {
    console.log('Admin no ar')
})