import { useForm } from "../../hooks/useForm";

export const AddComment = ({
    onCommentSubmit,
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);

    return (
        <article className='comment-article'>
            <label>Add new comment</label>
            <form className='comment-form' onSubmit={onSubmit}>
                <textarea name='comment' placeholder='Comment....' value={values.comment} onChange={changeHandler}></textarea>
                <input className='comment-submit' type='submit' value='Add Comment'></input>
            </form>
        </article>
    );
};