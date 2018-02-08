import {List as _List_} from '@aws/types';
import {_ProvisionedCapacityDescription} from './_ProvisionedCapacityDescription';

export const _ProvisionedCapacityList: _List_ = {
    type: 'list',
    member: {
        shape: _ProvisionedCapacityDescription,
    },
};