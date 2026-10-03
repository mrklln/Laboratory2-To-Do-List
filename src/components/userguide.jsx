function UserGuide() {
    return(
        <div className="bg-mauve-600 rounded-xl shadow p-4 sm:p-6">
                    <h2 className="sm:text-2xl text-xl font-bold mb-4 text-center">User Guide</h2>
                    <ol className="list-decimal list-inside space-y-2 text-black-700">
                        <li>Type your task and click <b>Add</b> (or press Enter).</li>
                        <li>New tasks appear in the <b>Not Done</b> box.</li>
                        <li>Click <b>Done</b> to move a task to the <b>Done</b> box.</li>
                        <li>Click <b>Undo</b> to move it back to Not Done.</li>
                        <li>Click <b>Delete</b> to remove a task.</li>
                        <li>Click <b>Clear All</b> to reset everything.</li>
                    </ol>
                </div>
    );
}

export default UserGuide