package io.dataease.api.free.vo;

import io.dataease.model.TreeResultModel;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Data
public class FreeVO implements Serializable, TreeResultModel<FreeVO> {
    @Serial
    private static final long serialVersionUID = -7055936995493939929L;

    private Long id;

    private Long pid;

    private String name;

    private boolean leaf;

    private Long createTime;

    private int rtId;

    private int extraFlag;

    private List<FreeVO> children;
}
