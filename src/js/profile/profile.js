import $ from 'jquery';
import 'weui.js';
import template from 'art-template/dist/template-debug';
import tpl from 'raw!./profile.html';
import styles from './profile.less';

export default {
    url: '/profile',
    className: 'profile',
    render: function () {
        return template.compile(tpl)({
            styles: styles
        });
    },
    bind: function () {
        $(this).on('click', '#avatarCell', function () {

            $.weui.actionSheet([
                {
                    label: '拍照',
                    onClick: () => {}
                },
                {
                    label: '从手机相册选择',
                    onClick: () => {}
                },
                {
                    label: '保存图片',
                    onClick: () => {}
                }
            ]);
        });
    }
};