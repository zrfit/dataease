package io.dataease.extensions.datafilling.factory;

import io.dataease.extensions.datasource.utils.SpringContextUtil;
import io.dataease.extensions.datasource.vo.DatasourceConfiguration;
import io.dataease.extensions.datafilling.provider.ExtDDLProvider;

public class ExtDDLProviderFactory {

    public static ExtDDLProvider getExtDDLProvider(String type) {
        DatasourceConfiguration.DatasourceType datasourceType = DatasourceConfiguration.DatasourceType.valueOf(type);
        switch (datasourceType) {
            case mysql:
            case mariadb:
                return SpringContextUtil.getApplicationContext().getBean("mysqlExtDDLProvider", ExtDDLProvider.class);

        }
        return null;
    }


}
