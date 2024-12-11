UPDATE `visualization_background` SET `name` = 'Board10' WHERE `id` = 'dark_1';
UPDATE `visualization_subject` SET `name` = 'chart.light_theme' WHERE `id` = '10001';
UPDATE `visualization_subject` SET `name` = 'chart.dark_theme' WHERE `id` = '10002';
CREATE INDEX idx_dataset_table_task_log_A ON core_datasource_task_log(ds_id, table_name, start_time);
