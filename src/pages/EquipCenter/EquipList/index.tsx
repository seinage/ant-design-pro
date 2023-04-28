import {FC, useState} from "react";
import {ActionType, PageContainer, ProColumns} from "@ant-design/pro-components";
import {useModel} from "@umijs/max";

export type EquipListProps = never

const EquipList: FC<EquipListProps> = (props) => {
  const {increment,decrement} = useModel('equipCenter')

  const [createModalOpen, handleModalOpen] = useState<boolean>(false)
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false)

  const [showDetail, setShowDetail] = useState<ActionType>()
  const [currentRow, setCurrentRow] = useState<API.RuleListItem>()
  const [selectedRowsState, setSelectedRows] = useState<API.RuleListItem[]>([])

  /* const columns:ProColumns<API.RuleListItem>[] = [
     {
       title:'序号',
       render:(dom,entity)=>{}

     }
   ]*/

  return (
    <PageContainer>
    </PageContainer>
  );
};

export default EquipList;
