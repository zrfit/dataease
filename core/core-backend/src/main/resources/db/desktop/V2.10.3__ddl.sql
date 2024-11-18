INSERT INTO `core_sys_setting`(`id`, `pkey`, `pval`, `type`, `sort`)
VALUES (1048232869488627719, 'basic.defaultSort', '1', 'text', 13);

INSERT INTO `core_sys_setting`(`id`, `pkey`, `pval`, `type`, `sort`)
VALUES (1048232869488627719, 'basic.defaultOpen', '1', 'text', 14);

ALTER TABLE `data_visualization_info`
    ADD COLUMN `content_id` varchar(50) NULL DEFAULT '0' COMMENT '内容标识';