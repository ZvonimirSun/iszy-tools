import type { User } from '@/types/auth'
import type { Columns } from 'element-plus'
import dayjs from 'dayjs'
import { ElButton, ElPopconfirm, ElTag } from 'element-plus'
import { FixedDir } from 'element-plus/es/components/table-v2/src/constants'
import 'element-plus/es/components/tag/style/css'
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/popconfirm/style/css'

enum UserStatus {
  DELETED = -1,
  DEACTIVATED = 0,
  ENABLED = 1,
  DISABLED = 2,
}

export function getUserTableColumns(onClick: (row: User, operation: string) => void): Columns<any> {
  return [
    {
      key: 'userId',
      dataKey: 'userId',
      width: 150,
      hidden: true,
    },
    {
      key: 'userName',
      dataKey: 'userName',
      title: '用户名',
      width: 150,
      align: 'center',
    },
    {
      key: 'nickName',
      dataKey: 'nickName',
      title: '昵称',
      width: 150,
      align: 'center',
    },
    {
      key: 'email',
      dataKey: 'email',
      title: '邮箱',
      width: 150,
      align: 'center',
    },
    {
      key: 'roles',
      title: '角色',
      width: 150,
      align: 'center',
      cellRenderer: ({ rowData }: { rowData: User }) => {
        const data = rowData.roles?.map((item) => {
          return item.name
        }).join(', ') || ''
        return <span>{data}</span>
      },
    },
    {
      key: 'status',
      title: '状态',
      width: 100,
      align: 'center',
      cellRenderer: ({ rowData }: { rowData: User }) => {
        switch (rowData.status) {
          case UserStatus.ENABLED:
            return <ElTag type="success">正常</ElTag>
          case UserStatus.DISABLED:
            return <ElTag type="info">禁用</ElTag>
          case UserStatus.DEACTIVATED:
            return <ElTag type="info">待激活</ElTag>
          default:
            return <ElTag type="warning">未知</ElTag>
        }
      },
    },
    {
      key: 'createdAt',
      title: '创建时间',
      width: 200,
      align: 'center',
      cellRenderer: ({ rowData }: { rowData: User }) => {
        return <span>{dayjs(rowData.createdAt).format('YYYY-MM-DD HH:mm:ss')}</span>
      },
    },
    {
      key: 'updatedAt',
      title: '更新时间',
      width: 200,
      align: 'center',
      cellRenderer: ({ rowData }: { rowData: User }) => {
        return <span>{dayjs(rowData.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</span>
      },
    },
    {
      key: 'operations',
      title: '操作',
      width: 200,
      fixed: FixedDir.RIGHT,
      cellRenderer: ({ rowData }: { rowData: User }) => {
        return (
          <>
            <ElButton
              size="small"
              plain
              onClick={() => onClick(rowData, 'edit')}
            >
              修改
            </ElButton>
            {
              rowData.status === UserStatus.DEACTIVATED || rowData.status === UserStatus.DISABLED
                ? (
                    <ElButton
                      size="small"
                      plain
                      onClick={() => onClick(rowData, 'activate')}
                    >
                      启用
                    </ElButton>
                  )
                : (
                    <ElButton
                      size="small"
                      plain
                      onClick={() => onClick(rowData, 'disable')}
                    >
                      禁用
                    </ElButton>
                  )
            }
            <ElPopconfirm
              title="确定要删除吗？"
              onConfirm={() => onClick(rowData, 'delete')}
            >
              {{
                reference: () => (
                  <ElButton
                    size="small"
                    plain
                    type="danger"
                  >
                    删除
                  </ElButton>
                ),
              }}
            </ElPopconfirm>
          </>
        )
      },
    },
  ]
}
