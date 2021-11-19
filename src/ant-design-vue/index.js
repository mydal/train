import { Layout, Button, Menu,Table,Divider,Breadcrumb,Tag,Popconfirm,Select,Input,Space } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// import 'ant-design-vue/dist/antd.dark.css';

const components = [
    Button,
    Menu,
    Layout,
    Table,
    Divider,
    Breadcrumb,
    Tag,
    Popconfirm,
    Select,
    Input,
    Space
]



export function setupAntd(app) {
    components.forEach(component => {
        app.use(component)
    })
}