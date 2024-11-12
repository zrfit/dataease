const treeDraggble = (state, key, req, type) => {
  let dragNodeParentId = ''
  let dragNodeId = ''
  let dragNodeIndex = 0

  const dfsTreeNode = (arr, parentId) => {
    arr.forEach((element, index) => {
      if (element.id === dragNodeId) {
        dragNodeIndex = index
        dragNodeParentId = parentId
      }
      if (element.children?.length) {
        dfsTreeNode(element.children, element.id)
      }
    })
  }

  const dfsTreeNodeBack = (arr, parentId, params) => {
    arr.forEach(element => {
      if (element.id === params.id) {
        params.pid = parentId
      }
      if (element.children?.length) {
        dfsTreeNodeBack(element.children, element.id, params)
      }
    })
  }

  const dfsTreeNodeReset = (arr, node) => {
    arr.forEach(element => {
      if (element.id === dragNodeParentId) {
        element.children.splice(dragNodeIndex, 0, node)
      }
      if (element.children?.length) {
        dfsTreeNodeReset(element.children, node)
      }
    })
  }

  const handleDragStart = node => {
    dragNodeId = node.data.id
    dfsTreeNode(state[key], '0')
  }

  const allowDrop = (_, dropNode) => {
    return !dropNode.data?.leaf
  }

  const handleDrop = (draggingNode, dropNode, dropType) => {
    const params = {
      id: draggingNode.data?.id,
      name: draggingNode.data?.name,
      nodeType: draggingNode.data?.leaf ? type : 'folder',
      pid: '0',
      action: 'move'
    }

    if (dropType === 'inner') {
      params.pid = dropNode.data?.id
    } else {
      dfsTreeNodeBack(state[key], '0', params)
    }

    req(params).catch(() => {
      if (dragNodeParentId === '0') {
        state[key].splice(dragNodeIndex, 0, draggingNode.data)
        return
      }

      dfsTreeNodeReset(state[key], draggingNode.data)
    })
  }

  return {
    handleDrop,
    allowDrop,
    handleDragStart
  }
}

export { treeDraggble }
