import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {GetVaultAccessPolicy} from '../model/GetVaultAccessPolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetVaultAccessPolicyInput} from '../types/GetVaultAccessPolicyInput';
import {GetVaultAccessPolicyOutput} from '../types/GetVaultAccessPolicyOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class GetVaultAccessPolicyCommand implements __aws_types.Command<
    InputTypesUnion,
    GetVaultAccessPolicyInput,
    OutputTypesUnion,
    GetVaultAccessPolicyOutput,
    GlacierResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetVaultAccessPolicyInput,
        GetVaultAccessPolicyOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetVaultAccessPolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<GetVaultAccessPolicyInput, GetVaultAccessPolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetVaultAccessPolicy
        };

        return stack.resolve(
            handler<GetVaultAccessPolicyInput, GetVaultAccessPolicyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}