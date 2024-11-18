INSERT INTO `core_sys_setting`(`id`, `pkey`, `pval`, `type`, `sort`)
VALUES (1048232869488627719, 'basic.defaultSort', '1', 'text', 13);

INSERT INTO `core_menu` VALUES (70, 0, 1, 'msg', NULL, 200, NULL, '/msg', 1, 1, 0);

UPDATE `xpack_setting_authentication` set `synced` = 0 where `name` = 'oidc' or name = 'cas';

ALTER TABLE `data_visualization_info`
    ADD COLUMN `content_id` varchar(50) NULL DEFAULT '0' COMMENT '内容标识';
